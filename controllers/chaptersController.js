const Chapters = require('../models/Chapters'); // Ensure this path points to your Chapters model

exports.createChapter = async (req, res) => {
    try {
        const newChapter = await Chapters.create(req.body);
        res.status(201).json(newChapter);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.getChapterById = async (req, res) => {
    const chapterId = req.params.id;

    try {
        const chapter = await Chapters.findByPk(chapterId);
        if (chapter) {
            res.json(chapter);
        } else {
            res.status(404).json({ message: 'Chapter not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

exports.updateChapter = async (req, res) => {
    const chapterId = req.params.id;

    try {
        const [updated] = await Chapters.update(req.body, { where: { chapterId: chapterId } });
        if (updated) {
            const updatedChapter = await Chapters.findByPk(chapterId);
            res.status(200).json(updatedChapter);
        } else {
            res.status(404).json({ message: 'Chapter not found' });
        }
    } catch (error) {
        res.status(400).json(error);
    }
};

exports.deleteChapter = async (req, res) => {
    try {
        const numberDestroyed = await Chapters.destroy({ where: { chapterId: req.params.id } });
        if (numberDestroyed) {
            res.status(200).json({ message: 'Chapter deleted successfully' });
        } else {
            res.status(404).json({ message: 'Chapter not found' });
        }
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.getAllChapters = async (req, res) => {
    try {
        const chapters = await Chapters.findAll();
        res.json(chapters);
    } catch (err) {
        res.status(400).json(err);
    }
};
