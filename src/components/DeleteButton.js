import React, { useContext } from 'react';
import { BiTrash } from 'react-icons/bi';
import { string, func } from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';

function DeleteButton({ id, onDelete }) {
  const { locale } = useContext(LocaleContext);

  return <button className="delete-button" onClick={() => onDelete(id)}><BiTrash /> {locale === 'id' ? 'Hapus' : 'Delete'}</button>
}

DeleteButton.propTypes = {
  id: string.isRequired,
  onDelete: func.isRequired
}

export default DeleteButton;