const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const AppUser = require('../models/appusers')
const RefreshToken = require('../models/refreshToken')

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'your_access_token_secret'; // Should be an environment variable
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || 'your_refresh_token_secret'; // Should be an environment variable

// Helper function to generate an access token
const generateAccessToken = (user) => {
    return jwt.sign({ userId: user.userId }, ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
};

// Helper function to generate a refresh token
const generateRefreshToken = (user) => {
    const refreshToken = jwt.sign({ userId: user.userId }, REFRESH_TOKEN_SECRET, { expiresIn: '7d' }); // Valid for 7 days
    return refreshToken;
};

// Helper function to store refresh token in database
const storeRefreshToken = async (userId, refreshToken) => {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 7); // 7 days from now

    return await RefreshToken.create({
        userId: userId,
        token: refreshToken,
        expiryDate: expiryDate
    });
};

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await AppUser.findOne({ where: { username } });
        
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Password is incorrect" });
        }

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        
        await storeRefreshToken(user.userId, refreshToken);

        res.json({
            accessToken: accessToken,
            refreshToken: refreshToken
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.refreshToken = async (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(401).json({ message: "Refresh Token is required" });
    }

    try {
        const refreshToken = await RefreshToken.findOne({ where: { token } });
        if (!refreshToken) {
            return res.status(403).json({ message: "Refresh token is not in database" });
        }

        if (refreshToken.expiryDate.getTime() < new Date().getTime()) {
            await refreshToken.destroy();
            return res.status(403).json({ message: "Refresh token expired" });
        }

        jwt.verify(token, REFRESH_TOKEN_SECRET, async (err, user) => {
            if (err) {
                return res.status(403).json({ message: "Invalid refresh token" });
            }

            const newAccessToken = generateAccessToken(user);
            const newRefreshToken = generateRefreshToken(user);

            await refreshToken.update({ token: newRefreshToken });

            res.json({
                accessToken: newAccessToken,
                refreshToken: newRefreshToken
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.logout = async (req, res) => {
    const { token } = req.body;

    try {
        await RefreshToken.destroy({ where: { token } });
        res.sendStatus(204); // Successfully processed the request, but not returning any content
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
