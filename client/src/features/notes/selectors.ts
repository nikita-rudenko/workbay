import { createSelector } from 'reselect';

import { RootState } from '../../store/rootReducer';
import { NotesState, NotesList } from './types';

const selectFeatureNotes = (state: RootState) => state.notes as NotesState;

export const selectNotes = createSelector(
  [selectFeatureNotes],
  ({ isLoading, notesList, error }) => ({
    isLoading,
    notesList: notesList as NotesList,
    error,
  })
);
