import React from 'react';
import { string, func, bool } from 'prop-types';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
import UnarchiveButton from './UnarchiveButton';

function NoteItemAction({ id, archived, onDelete, onArchive, onUnarchive }) {
  return (
    <div className="note-item__action">
      <DeleteButton id={id} onDelete={onDelete}  />
      { 
        archived
        ? <UnarchiveButton id={id} onUnarchive={onUnarchive} />
        : <ArchiveButton id={id} onArchive={onArchive} />
      }
    </div>  
  )
}

NoteItemAction.propTypes = {
  id: string.isRequired,
  archived: bool.isRequired,
  onDelete: func.isRequired,
  onArchive: func,
  onUnarchive: func
}

export default NoteItemAction;