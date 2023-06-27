import React, { useContext } from 'react';
import { BiArchiveIn } from 'react-icons/bi';
import { string, func } from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';

function ArchiveButton({ id, onArchive }) {
  const { locale } = useContext(LocaleContext);

  return <button className="archive-button" onClick={() => onArchive(id)}><BiArchiveIn /> {locale === 'id' ? 'Arsipkan' : 'Archive'}</button>
}

ArchiveButton.propTypes = {
  id: string.isRequired,
  onArchive: func.isRequired
}

export default ArchiveButton;