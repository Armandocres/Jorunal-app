import React from 'react'
import Note from '../notes/Note';
import Sidebar from './Sidebar';
// import NothingSelected from './NothingSelected';

const Journal = () => {
  return (
    <div className="journal__main-content">
      <Sidebar />
      <main>
        {/* <NothingSelected /> */}
        <Note />
      </main>
    </div>
  )
}

export default Journal;
