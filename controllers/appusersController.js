const AppUser = require('../models/appUsers'); // Ensure this path points to your AppUser model

exports.createAppUser = async (req, res) => {
    try {
        const newUser = await AppUser.create(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.getAppUserById = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await AppUser.findByPk(userId);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

exports.updateAppUser = async (req, res) => {
    const userId = req.params.id;

    try {
        const [updated] = await AppUser.update(req.body, { where: { userId: userId } });
        if (updated) {
            const updatedUser = await AppUser.findByPk(userId);
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(400).json(error);
    }
};

exports.deleteAppUser = async (req, res) => {
    try {
        const numberDestroyed = await AppUser.destroy({ where: { userId: req.params.id } });
        if (numberDestroyed) {
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.getAllAppUsers = async (req, res) => {
    try {
        const users = await AppUser.findAll();
        res.json(users);
    } catch (err) {
        res.status(400).json(err);
    }
};
