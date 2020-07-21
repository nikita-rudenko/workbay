import { createSlice } from '@reduxjs/toolkit';

import { NotesState } from './types';

const initialState: NotesState = {
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
  },
});

export default notesSlice;
