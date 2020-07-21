import { combineReducers } from '@reduxjs/toolkit';

import notes from '../features/notes';

const rootReducer = combineReducers({
  notes,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
