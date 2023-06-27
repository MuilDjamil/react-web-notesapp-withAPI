import React from 'react';
import { string, func, bool } from 'prop-types';
import NoteItemAction from './NoteItemAction';
import NoteItemBody from './NoteItemBody';

function NoteItem({ id, title, createdAt, body, archived, onDelete, onArchive, onUnarchive }) {
  return (
    <div className="card">
      <NoteItemBody id={id} title={title} createdAt={createdAt} body={body} />
      <NoteItemAction id={id} archived={archived} onDelete={onDelete} onArchive={onArchive} onUnarchive={onUnarchive} />
    </div>
  );
}

NoteItem.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  createdAt: string.isRequired,
  body: string.isRequired,
  archived: bool.isRequired,
  onDelete: func.isRequired,
  onArchive: func,
  onUnarchive: func
}

export default NoteItem;