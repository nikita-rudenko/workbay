import { put, takeLatest, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { notesApi, notesActions } from '.';

function* getNotes() {
  try {
    const { data } = yield call(notesApi.getNotes);
    yield put(notesActions.getNotesSuccess({ notes: data.notes.reverse() }));
  } catch (err) {
    yield put(notesActions.getNotesFailed({ err }));
  }
}

function* createNote({ payload }: PayloadAction) {
  try {
    // TODO: investigate how to type Redux Saga + Axios stuff properly
    // @ts-ignore
    const { status } = yield call(notesApi.createNote, payload);

    if (status === 'success') {
      yield getNotes();
      yield call(notesActions.createNoteSuccess);
    }
  } catch (err) {
    yield put(notesActions.getNotesFailed({ err }));
  }
}

function* watchNotesActions() {
  yield takeLatest(notesActions.getNotesRequest, getNotes);
  yield takeLatest(notesActions.createNoteRequest, createNote);
}

export default watchNotesActions;
