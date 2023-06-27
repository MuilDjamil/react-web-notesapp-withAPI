import React from 'react';
import { Link } from 'react-router-dom';
import parser from 'html-react-parser';
import { string } from 'prop-types';

function NoteItemBody({ id, title, createdAt, body }) {
  return (
    <div className="note-item__body">
      <Link to={`/notes/${id}`}><h3>{title}</h3></Link>
      <small>{createdAt}</small>
      <div>{parser(body)}</div>  
    </div>
  )
}

NoteItemBody.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  createdAt: string.isRequired,
  body: string.isRequired
}

export default NoteItemBody;