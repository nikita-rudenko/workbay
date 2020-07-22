import { createSlice } from '@reduxjs/toolkit';

import { NotesState } from './types';

const initialState: NotesState = {
  isUpdating: false,
  isLoading: false,
  notesList: [],
  error: null,
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    getNotesRequest(state) {
      state.isLoading = true;
    },
    getNotesSuccess(state, { payload }) {
      state.isLoading = false;
      state.notesList = payload.notes;
    },
    getNotesFailed(state, { payload }) {
      state.isLoading = false;
      state.error = payload.error;
    },
    createNoteRequest(state, action) {
      state.isUpdating = true;
    },
    createNoteSuccess(state) {
      state.isUpdating = false;
    },
    createNoteFailed(state, { payload }) {
      state.isUpdating = false;
      state.error = payload;
    },
  },
});

export default notesSlice;
