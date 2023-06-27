import React, { useContext } from 'react';
import { BiNote, BiArchive } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';

function Sidenav() {
  const { locale } = useContext(LocaleContext);

  return (
    <nav className="sidenav">
      <ul>
        <li>
          <Link className="sidenav__link" to="/notes"><BiNote className="sidenav__link__icon" /> {locale === 'id' ? "Catatan" : "Notes"}</Link>
        </li>
        <li>
          <Link className="sidenav__link" to="/archive"><BiArchive className="sidenav__link__icon" /> {locale === 'id' ? "Arsip" : "Archive"}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidenav;