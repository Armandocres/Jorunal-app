import React from 'react'

const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://static.dw.com/image/58243360_303.jpg)'
        }}
      >
      </div>
      <div className="jorunal__entry-body">
        <p className="journal__entry-title">Un nuevo dia</p>
        <p className="journal__entry-content">
          lorem id in duis ijciudc bdvcuhbvchj
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>24</h4>
      </div>
    </div>
  )
}

export default JournalEntry;
