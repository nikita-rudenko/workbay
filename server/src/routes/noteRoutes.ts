import express from 'express';

import noteController from '../controllers/noteController';

const router = express.Router();

router
  .route('/')
  .get(noteController.getAllNotes)
  .post(noteController.createNote);

router
  .route('/:id')
  .get(noteController.getNote)
  .patch(noteController.updateNote)
  .delete(noteController.deleteNote);

export default router;
