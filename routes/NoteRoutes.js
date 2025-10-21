const express = require('express');
const noteRoutes = express.Router();
const Note = require('../models/NotesModel.js'); // make sure path matches your file structure

// 🟢 Create a new Note
noteRoutes.post('/notes', async (req, res) => {
    try {
        const { noteTitle, noteDescription, priority } = req.body;

        if (!noteTitle || !noteDescription) {
            return res.status(400).send({ message: "Note title and description cannot be empty" });
        }

        const note = new Note({
            noteTitle,
            noteDescription,
            priority
        });

        const savedNote = await note.save();
        res.status(201).send(savedNote);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// 🟢 Retrieve all Notes
noteRoutes.get('/notes', async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).send(notes);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// 🟢 Retrieve a single Note by ID
noteRoutes.get('/notes/:noteId', async (req, res) => {
    try {
        const note = await Note.findById(req.params.noteId);

        if (!note) {
            return res.status(404).send({ message: "Note not found" });
        }

        res.status(200).send(note);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// 🟢 Update a Note by ID
noteRoutes.put('/notes/:noteId', async (req, res) => {
    try {
        const { noteTitle, noteDescription, priority } = req.body;

        const updatedNote = await Note.findByIdAndUpdate(
            req.params.noteId,
            {
                noteTitle,
                noteDescription,
                priority,
                dateUpdated: Date.now()
            },
            { new: true, runValidators: true }
        );

        if (!updatedNote) {
            return res.status(404).send({ message: "Note not found" });
        }

        res.status(200).send(updatedNote);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// 🟢 Delete a Note by ID
noteRoutes.delete('/notes/:noteId', async (req, res) => {
    try {
        const note = await Note.findByIdAndRemove(req.params.noteId);

        if (!note) {
            return res.status(404).send({ message: "Note not found" });
        }

        res.status(200).send({ message: "Note deleted successfully!" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

module.exports = noteRoutes;