import React, { useContext } from 'react';
import { arrayOf, object, func } from 'prop-types';
import { showFormattedDate } from '../utils/index';
import LocaleContext from '../contexts/LocaleContext';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive, onUnarchive }) {
  const { locale } = useContext(LocaleContext);

  if (notes.length === 0) {
    return <p className="empty-list">Nothing to Found Here...</p>
  }

  return (
    <div className="note-list">
      {
        notes.map((note) => (
          <NoteItem 
            key={note.id}
            {...note}
            createdAt={showFormattedDate(note.createdAt, locale)}   
            onDelete={onDelete}
            onArchive={onArchive}
            onUnarchive={onUnarchive}
          />
        ))
      }
    </div>
  );
}

NoteList.propTypes = {
  notes: arrayOf(object).isRequired,
  onDelete: func.isRequired,
  archiveNote: func,
  onUnarchive: func
}

export default NoteList;