const Progress = require('../models/Progress'); // Ensure this path points to your Progress model

exports.createProgress = async (req, res) => {
    try {
        const newProgress = await Progress.create(req.body);
        res.status(201).json(newProgress);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.getProgressById = async (req, res) => {
    const progressId = req.params.id;

    try {
        const progress = await Progress.findByPk(progressId);
        if (progress) {
            res.json(progress);
        } else {
            res.status(404).json({ message: 'Progress not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

exports.updateProgress = async (req, res) => {
    const progressId = req.params.id;

    try {
        const [updated] = await Progress.update(req.body, { where: { progressId: progressId } });
        if (updated) {
            const updatedProgress = await Progress.findByPk(progressId);
            res.status(200).json(updatedProgress);
        } else {
            res.status(404).json({ message: 'Progress not found' });
        }
    } catch (error) {
        res.status(400).json(error);
    }
};

exports.deleteProgress = async (req, res) => {
    try {
        const numberDestroyed = await Progress.destroy({ where: { progressId: req.params.id } });
        if (numberDestroyed) {
            res.status(200).json({ message: 'Progress deleted successfully' });
        } else {
            res.status(404).json({ message: 'Progress not found' });
        }
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.getAllProgress = async (req, res) => {
    try {
        const progress = await Progress.findAll();
        res.json(progress);
    } catch (err) {
        res.status(400).json(err);
    }
};
