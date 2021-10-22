import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { activeNote } from '../../actions/notes.action';
import useForm from '../../hooks/useForm';
import NoteAppBar from './NoteAppBar';

const Note = () => {

  const { active: note } = useSelector(state => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);
  const { body, title } = formValues;

  const dispatch = useDispatch();

  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    };
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, {...formValues}));
  }, [formValues, dispatch])

  return (
      <div className="notes__main-content">
      <NoteAppBar />
      <div className="notes__content">
        <input
          name='title'
          placeholder="SOME AWESOME TITLE"
          type="text"
          className="notes__title-input"
          autoComplete="off"
          value={title}
          onChange={handleInputChange}
          />
        <textarea
          placeholder="What happeened today"
          className="notes__textarea"
          value={body}
          name='body'
          onChange={handleInputChange}
        >
          </textarea>
        {
          note.url &&
          <div className="notes__image">
            <img src={note.url} alt="imagen" />
          </div>
        }
      </div>
      </div>
  )
}

export default Note;
