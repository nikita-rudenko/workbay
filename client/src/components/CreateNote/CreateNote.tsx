import React, {
  useState,
  SyntheticEvent,
  useRef,
  memo,
  useLayoutEffect,
} from 'react';
import { useDispatch } from 'react-redux';

import { notesActions } from '../../features/notes';
import useOuterClick from '../../hooks/useOuterClick';
import './CreateNote.css';

const initialNoteContent = { title: '', body: '' };

const AddNote = () => {
  const dispatch = useDispatch();
  const [noteContent, setNoteContent] = useState(initialNoteContent);
  const [isExpanded, setIsExpanded] = useState(false);

  const formRef = useOuterClick(saveNote);
  const titleRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  function expand() {
    setIsExpanded(true);
  }

  useLayoutEffect(() => {
    if (bodyRef.current) bodyRef.current.focus();
  }, [isExpanded]);

  function cleanupAfterSave() {
    if (titleRef?.current?.innerText) titleRef.current.innerText = '';
    if (bodyRef?.current?.innerText) bodyRef.current.innerText = '';
  }

  function saveNote() {
    if (noteContent.title || noteContent.body) {
      sendNote();
      cleanupAfterSave();
    }
    setIsExpanded(false);
  }

  function sendNote() {
    dispatch(notesActions.createNoteRequest(noteContent));
    setNoteContent(initialNoteContent);
  }

  function updateInputValue(e: SyntheticEvent) {
    const targetElement = e.currentTarget as HTMLElement;
    const inputType = targetElement.dataset.type as string;

    setNoteContent({
      ...noteContent,
      [inputType]: targetElement.textContent,
    });
  }

  return (
    <div className="create-note" ref={formRef}>
      {isExpanded ? (
        <>
          <div
            key="active-title"
            data-placeholder="Title"
            data-type="title"
            className="create-note__input create-note__input--title"
            ref={titleRef}
            onInput={updateInputValue}
            contentEditable
            suppressContentEditableWarning
          />

          <div
            key="active-body"
            ref={bodyRef}
            onInput={updateInputValue}
            data-type="body"
            className="create-note__input create-note__input--body"
            data-placeholder="Take a note..."
            contentEditable
            suppressContentEditableWarning
          />

          <div className="create-note__footer">
            <div className="create-note__save" onClick={saveNote}>
              Save
            </div>
          </div>
        </>
      ) : (
        <div
          key="initial"
          onClick={expand}
          onFocus={expand}
          className="create-note__input create-note__input--body create-note__input--initial"
          data-placeholder="✍️ Take a note..."
          contentEditable
          suppressContentEditableWarning
        />
      )}
    </div>
  );
};

export default memo(AddNote);
