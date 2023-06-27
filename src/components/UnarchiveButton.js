import React, { useContext } from 'react';
import { string, func } from 'prop-types';
import { BiArchiveOut } from 'react-icons/bi';
import LocaleContext from '../contexts/LocaleContext';

function UnarchiveButton({ id, onUnarchive }) {
  const { locale } = useContext(LocaleContext);

  return <button className="unarchive-button" onClick={() => onUnarchive(id)}><BiArchiveOut /> {locale === 'id' ? 'Pulihkan' : 'Unarchive'}</button>
}

UnarchiveButton.propTypes = {
  id: string.isRequired,
  onUnarchive: func.isRequired
}

export default UnarchiveButton;