import { Request, Response } from 'express';
import Note from '../models/noteModel';

const getAllNotes = async (req: Request, res: Response) => {
  const notes = await Note.find();

  res.status(200).json({
    status: 'success',
    data: {
      notes,
    },
  });
};

const createNote = async (req: Request, res: Response) => {
  const newNote = await Note.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      note: newNote,
    },
  });
};

const getNote = async (req: Request, res: Response) => {
  const note = await Note.findById(req.params.id);

  if (!note) {
    res.status(404).json({
      status: 'fail',
      message: `No notes found with this id - ${req.params.id}`,
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      note,
    },
  });
};

const updateNote = async (req: Request, res: Response) => {
  const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!note) {
    res.status(404).json({
      status: 'fail',
      message: `No notes found with this id - ${req.params.id}`,
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      note,
    },
  });
};

const deleteNote = async (req: Request, res: Response) => {
  const note = await Note.findByIdAndDelete(req.params.id, req.body);

  if (!note) {
    res.status(404).json({
      status: 'fail',
      message: `No notes found with this id - ${req.params.id}`,
    });
  }

  res.status(200).json({
    status: 'success',
    data: null,
  });
};

export default { getAllNotes, createNote, getNote, updateNote, deleteNote };
