import React from 'react';

import './Note.css';

type Props = {
  title: string;
  body: string;
};

const Note = ({ title, body }: Props) => {
  return (
    <div className="note">
      <div className="note__title">{title}</div>
      <div className="note__body-container">
        <p className="note__body-text">{body}</p>
      </div>
    </div>
  );
};

export default Note;
