import React, { useContext, useEffect, useState } from 'react';
import { string } from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';
import NoteList from '../components/NoteList';
import NoteInput from '../components/NoteInput';
import { getActiveNotes, addNote, deleteNote, archiveNote  } from '../utils/network-data';

function NotesPage({ keyword }) {
  const { locale } = useContext(LocaleContext);
  const [notes, setNotes] = useState([]);
  const [initiate, setInitiate] = useState(true);

  useEffect(() => {
    getActiveNotes().then(({ error, data }) => {
      if (!error) setNotes(data);
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setInitiate(false); 
    });
  }, [initiate, notes.length]);

  const onAddNoteHandler = (note) => {
    setInitiate(true);
    addNote(note).then(({ error, data }) => {
      if (!error) {
        setNotes(data);
        if (locale === 'id') {
          alert('Catatan ditambahkan');
        } else {
          alert('Note added');
        }
      }
    })
  }

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

  const onArchiveNoteHandler = (id) => {
    setInitiate(true);
    archiveNote(id).then(({ error }) => {
      if (!error) {
        if (locale === 'id') {
          alert('Catatan diarsipkan');
        } else {
          alert('Note archived');
        }
      } 
    });
  }

  if (initiate) return <div className="lds-ring"><div></div><div></div><div></div><div></div></div>

  const filteredNotes = notes.filter((note) => 
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <section className="notes-page">
      <NoteInput addNote={onAddNoteHandler} />
      <NoteList notes={filteredNotes} onDelete={onDeleteNoteHandler} onArchive={onArchiveNoteHandler} />
    </section>
  );
}

NotesPage.propTypes = {
  keyword: string.isRequired
}

export default NotesPage;