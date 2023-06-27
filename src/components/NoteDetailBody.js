import React from 'react';
import parser from 'html-react-parser';
import { string } from 'prop-types';

function NoteDetailBody({ title, createdAt, body }) {
  return (
    <div className="note-detail__body">
      <h2>{title}</h2>
      <small>{createdAt}</small>
      <div>{parser(body)}</div>
    </div>  
  )
}

NoteDetailBody.propTypes = {
  title: string.isRequired,
  createdAt: string.isRequired,
  body: string.isRequired
}

export default NoteDetailBody;