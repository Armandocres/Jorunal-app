import React from 'react'
import NoteAppBar from './NoteAppBar';

const Note = () => {
  return (
      <div className="notes__main-content">
      <NoteAppBar />
      <div className="notes__content">
          <input
            placeholder="SOME AWESOME TITLE"
            type="text"
            className="notes__title-input"
            autoComplete="off"
          />
          <textarea placeholder="WHat happeened today" className="notes__textarea">
          </textarea>
          <div className="notes__image">
            <img src="https://static.dw.com/image/58243360_303.jpg" alt="imagen" />
          </div>
      </div>
      </div>
  )
}

export default Note;
