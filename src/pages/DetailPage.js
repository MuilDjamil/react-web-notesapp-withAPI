import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { showFormattedDate } from '../utils/index';
import { getNote, archiveNote, unarchiveNote, deleteNote } from '../utils/network-data';
import LocaleContext from '../contexts/LocaleContext';
import NoteDetailBody from '../components/NoteDetailBody';
import NoteDetailAction from '../components/NoteDetailAction';

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);
  const [note, setNote] = useState({});
  const [initiate, setInitiate] = useState(true);

  useEffect(() => {
    getNote(id).then(({ error, data }) => {
      if (!error) setNote(data);
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setInitiate(false);
    })
  }, [initiate, id]);

  const onDeleteNoteHandler = (id) => {
    setInitiate(true);
    deleteNote(id).then(({ error }) => {
      if (!error) {
        if (locale === 'id') {
          alert('Catatan dihapus');
        } else {
          alert('Note deleted');
        }
        navigate('/');
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
        navigate('/archive');
      }
    })
  }

  const onUnarchiveNoteHandler = (id) => {
    setInitiate(true);
    unarchiveNote(id).then(({ error }) => {
      if (!error) {
        if (locale === 'id') {
          alert('Catatan dipulihkan');
        } else {
          alert('Note recovered')
        }
        navigate('/notes');
      }
    });
  }

  if (initiate) return <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
  if (!note) return <h2 className="empty-list">Can't Find That Note !!</h2>

  return (
    <section className="note-detail">
      <NoteDetailBody {...note} createdAt={showFormattedDate(note.createdAt)} />
      <NoteDetailAction 
        id={note.id} 
        archived={note.archived} 
        onDelete={onDeleteNoteHandler} 
        onArchive={onArchiveNoteHandler} 
        onUnarchive={onUnarchiveNoteHandler} 
      />
    </section>
  )
}

export default DetailPage;