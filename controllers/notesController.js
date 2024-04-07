const Notes = require('../models/Notes'); // Ensure this path points to your Notes model

exports.createNotes = async (req, res) => {
    try {
        const newNotes = await Notes.create(req.body);
        res.status(201).json(newNotes);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.getNotesById = async (req, res) => {
    const notesId = req.params.id;

    try {
        const notes = await Notes.findByPk(notesId);
        if (notes) {
            res.json(notes);
        } else {
            res.status(404).json({ message: 'Notes not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

exports.updateNotes = async (req, res) => {
    const notesId = req.params.id;

    try {
        const [updated] = await Notes.update(req.body, { where: { notesId: notesId } });
        if (updated) {
            const updatedNotes = await Notes.findByPk(notesId);
            res.status(200).json(updatedNotes);
        } else {
            res.status  (404).json({ message: 'Notes not found' });
        }
    } catch (error) {
        res.status(400).json(error);
    }
};

exports.deleteNotes = async (req, res) => {
    try {
        const numberDestroyed = await Notes.destroy({ where: { notesId: req.params.id } });
        if (numberDestroyed) {
            res.status(200).json({ message: 'Notes deleted successfully' });
        } else {
            res.status(404).json({ message: 'Notes not found' });
        }
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.getAllNotes = async (req, res) => {
    try {
        const notes = await Notes.findAll();
        res.json(notes);
    } catch (err) {
        res.status(400).json(err);
    }
};
