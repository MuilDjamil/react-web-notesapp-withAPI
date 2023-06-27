import React from 'react';
import { bool, func, string } from 'prop-types';
import ArchiveButton from './ArchiveButton';
import DeleteButton from './DeleteButton';
import UnarchiveButton from './UnarchiveButton';

function NoteDetailAction({ id, archived, onArchive, onUnarchive, onDelete }) {
  return (
    <div className="note-detail__action">
      {
        !archived 
        ? <ArchiveButton id={id} onArchive={onArchive} />
        : <UnarchiveButton id={id} onUnarchive={onUnarchive} />
      }
      <DeleteButton id={id} onDelete={onDelete} />
    </div>  
  )
}

NoteDetailAction.propTypes = {
  id: string.isRequired,
  archived: bool.isRequired,
  onDelete: func.isRequired,
  onArchive: func,
  onUnarchive: func
}

export default NoteDetailAction;