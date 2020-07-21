import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { notesActions, notesSelectors } from '../../features/notes';

const NotesList = () => {
  const dispatch = useDispatch();
  const { notesList, isLoading } = useSelector(notesSelectors.selectNotes);

  useEffect(() => {
    dispatch(notesActions.getNotesRequest());
  }, [dispatch]);

  if (!notesList.length && !isLoading) return <p>No results</p>;

  return (
    <div>
      {notesList.map((note) => {
        return <p key={note._id}>{note.title}</p>;
      })}
    </div>
  );
};

export default NotesList;
