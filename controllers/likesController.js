const Likes = require('../models/Likes'); // Ensure this path points to your Likes model

exports.createLike = async (req, res) => {
    try {
        const newLike = await Likes.create(req.body);
        res.status(201).json(newLike);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.getLikeById = async (req, res) => {
    const likeId = req.params.id;

    try {
        const like = await Likes.findByPk(likeId);
        if (like) {
            res.json(like);
        } else {
            res.status(404).json({ message: 'Like not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

exports.updateLike = async (req, res) => {
    const likeId = req.params.id;

    try {
        const [updated] = await Likes.update(req.body, { where: { likeId: likeId } });
        if (updated) {
            const updatedLike = await Likes.findByPk(likeId);
            res.status(200).json(updatedLike);
        } else {
            res.status(404).json({ message: 'Like not found' });
        }
    } catch (error) {
        res.status(400).json(error);
    }
};

exports.deleteLike = async (req, res) => {
    try {
        const numberDestroyed = await Likes.destroy({ where: { likeId: req.params.id } });
        if (numberDestroyed) {
            res.status(200).json({ message: 'Like deleted successfully' });
        } else {
            res.status(404).json({ message: 'Like not found' });
        }
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.getAllLikes = async (req, res) => {
    try {
        console.log('called here')
        const likes = await Likes.findAll();
        res.json(likes);
    } catch (err) {
        res.status(400).json(err);
    }
};
