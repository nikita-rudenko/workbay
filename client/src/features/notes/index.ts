import notesSlice from './slice';
import notesSagas from './sagas';
import * as notesApi from './api';
import * as notesSelectors from './selectors';

const { actions: notesActions, reducer: notesReducer } = notesSlice;

export { notesActions, notesApi, notesSagas, notesSelectors };

export default notesReducer;
