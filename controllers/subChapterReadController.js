const SubchapterRead = require('../models/SubchapterRead'); // Ensure this path points to your SubchapterRead model
const Progress = require('../models/Progress'); // Ensure this path points to your Progress model

exports.createSubchapterRead = async (req, res) => {
    try {
        const newSubchapterRead = await SubchapterRead.create(req.body);
        res.status(201).json(newSubchapterRead);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.getSubchapterReadById = async (req, res) => {
    const readId = req.params.id;

    try {
        const subchapterRead = await SubchapterRead.findByPk(readId);
        if (subchapterRead) {
            res.json(subchapterRead);
        } else {
            res.status(404).json({ message: 'SubchapterRead not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

exports.updateSubchapterRead = async (req, res) => {
    const readId = req.params.id;

    try {
        const [updated] = await SubchapterRead.update(req.body, { where: { readId: readId } });
        if (updated) {
            const updatedSubchapterRead = await SubchapterRead.findByPk(readId);
            res.status(200).json(updatedSubchapterRead);
        } else {
            res.status(404).json({ message: 'SubchapterRead not found' });
        }
    } catch (error) {
        res.status(400).json(error);
    }
};

exports.deleteSubchapterRead = async (req, res) => {
    try {
        const numberDestroyed = await SubchapterRead.destroy({ where: { readId: req.params.id } });
        if (numberDestroyed) {
            res.status(200).json({ message: 'SubchapterRead deleted successfully' });
        } else {
            res.status(404).json({ message: 'SubchapterRead not found' });
        }
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.getAllSubchapterRead = async (req, res) => {
    try {
        const subchapterRead = await SubchapterRead.findAll();
        res.json(subchapterRead);
    } catch (err) {
        res.status(400).json(err);
    }
};
