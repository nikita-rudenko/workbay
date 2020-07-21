import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { notesActions, notesSelectors } from '../../features/notes';
import Note from '../Note';
import './NotesList.css';

const NotesList = () => {
  const dispatch = useDispatch();
  const { notesList, isLoading } = useSelector(notesSelectors.selectNotes);

  useEffect(() => {
    dispatch(notesActions.getNotesRequest());
  }, [dispatch]);

  if (!notesList.length && !isLoading) return <p>No results</p>;

  return (
    <div className="notes-list">
      {notesList.map(({ _id, title, body }) => {
        return <Note key={_id} title={title} body={body} />;
      })}
    </div>
  );
};

export default NotesList;
