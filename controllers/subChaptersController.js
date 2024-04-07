const Subchapters = require('../models/Subchapters'); // Ensure this path points to your Subchapters model

exports.createSubchapter = async (req, res) => {
    try {
        const newSubchapter = await Subchapters.create(req.body);
        res.status(201).json(newSubchapter);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.getSubchapterById = async (req, res) => {
    const subchapterId = req.params.id;

    try {
        const subchapter = await Subchapters.findByPk(subchapterId);
        if (subchapter) {
            res.json(subchapter);
        } else {
            res.status(404).json({ message: 'Subchapter not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

exports.updateSubchapter = async (req, res) => {
    const subchapterId = req.params.id;

    try {
        const [updated] = await Subchapters.update(req.body, { where: { subchapterId: subchapterId } });
        if (updated) {
            const updatedSubchapter = await Subchapters.findByPk(subchapterId);
            res.status(200).json(updatedSubchapter);
        } else {
            res.status(404).json({ message: 'Subchapter not found' });
        }
    } catch (error) {
        res.status(400).json(error);
    }
};

exports.deleteSubchapter = async (req, res) => {
    try {
        const numberDestroyed = await Subchapters.destroy({ where: { subchapterId: req.params.id } });
        if (numberDestroyed) {
            res.status(200).json({ message: 'Subchapter deleted successfully' });
        } else {
            res.status(404).json({ message: 'Subchapter not found' });
        }
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.getAllSubchapters = async (req, res) => {
    try {
        const subchapters = await Subchapters.findAll();
        res.json(subchapters);
    } catch (err) {
        res.status(400).json(err);
    }
};
