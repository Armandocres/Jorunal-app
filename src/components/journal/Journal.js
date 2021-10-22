import React from 'react'
import { useSelector } from 'react-redux';
import Note from '../notes/Note';
import Sidebar from './Sidebar';
import NothingSelected from './NothingSelected';

const Journal = () => {

  const { active } = useSelector(state => state.notes);

  return (
    <div className="journal__main-content animate__animated animate__fadeIn animate_faster">
      <Sidebar />
      <main>
        {
          (active)
            ? (<Note />)
            : (<NothingSelected /> )
        }
      </main>
    </div>
  )
}

export default Journal;
