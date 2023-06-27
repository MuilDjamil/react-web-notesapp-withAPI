import React, { useContext, useState } from 'react';
import { func } from 'prop-types';
import useInput from '../hooks/useInput';
import LocaleContext from '../contexts/LocaleContext';

function NoteInput({ addNote }) {
  const { locale } = useContext(LocaleContext);
  const [title, setTitle] = useInput('');
  const [body, setBody] = useState('');

  const bodyChange = (event) => {
    setBody(event.target.innerHTML);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addNote({ title, body });
  }

  return (
    <form className="note-input" onSubmit={onSubmit}>
      <input className="note-input__title" type="text" placeholder={locale === 'id' ? "Judul" : "Title"} value={title} onChange={setTitle} />
      <div className="note-input__body" placeholder={locale ==='id' ? "Tulis catatan..." : "Write your Note..."} value={body} onInput={bodyChange} contentEditable />
      <button type="submit">{locale === 'id' ? "Simpan" : "Save"}</button>
    </form>
  )
}

NoteInput.propTypes = {
  addNote: func.isRequired
}

export default NoteInput;