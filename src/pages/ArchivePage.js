import React, { useContext, useEffect, useState } from 'react';
import { string } from 'prop-types';
import { getArchivedNotes, deleteNote, unarchiveNote } from '../utils/network-data';
import LocaleContext from '../contexts/LocaleContext';
import NoteList from '../components/NoteList';

function ArchivePage({ keyword }) {
  const { locale } = useContext(LocaleContext);
  const [notes, setNotes] = useState([]);
  const [initiate, setInitiate] = useState(true);

  useEffect(() => {
    getArchivedNotes().then(({ error, data }) => {
      if (!error) {
        setNotes(data);
      }
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setInitiate(false);
    });
  }, [initiate, notes.length]);

  const onDeleteNoteHandler = (id) => {
    setInitiate(true);
    deleteNote(id).then(({ error }) => {
      if (!error) {
        if (locale === 'id') {
          alert('Catatan dihapus');
        } else {
          alert('Note deleted');
        }
      }
    });
  }

  const onUnarchiveNoteHandler = (id) => {
    setInitiate(true);
    unarchiveNote(id).then(({ error }) => {
      if (!error) {
        if (locale === 'id') {
          alert('Catatan dipulihkan');
        } else {
          alert('Note recovered');
        }
      }
    });
  }

  if (initiate) return <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    
  const filteredNotes = notes.filter((note) => 
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <section className="archive-page">
      <NoteList notes={filteredNotes} onDelete={onDeleteNoteHandler} onUnarchive={onUnarchiveNoteHandler} /> 
    </section>
  );
}

ArchivePage.propTypes = {
  keyword: string.isRequired
}

export default ArchivePage;