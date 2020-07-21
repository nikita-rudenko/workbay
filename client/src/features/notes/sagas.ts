import { put, takeLatest, call } from 'redux-saga/effects';

import { notesApi, notesActions } from '.';

function* getNotes() {
  try {
    const { data } = yield call(notesApi.getNotes);
    yield put(notesActions.getNotesSuccess({ notes: data.notes }));
  } catch (err) {
    yield put(notesActions.getNotesFailed({ err }));
  }
}

function* watchNotesActions() {
  yield takeLatest(notesActions.getNotesRequest, getNotes);
}

export default watchNotesActions;
