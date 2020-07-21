import { all } from 'redux-saga/effects';

import { notesSagas } from '../features/notes';

/**
 * Root saga pattern
 * https://redux-saga.js.org/docs/advanced/RootSaga.html
 */
export default function* rootSaga() {
  yield all([notesSagas()]);
}
