import React, { useContext } from 'react';
import { func, string } from 'prop-types';
import AuthedContext from '../contexts/AuthedContext';
import SearchBar from './SearchBar';
import LocaleSwitch from './LocaleSwitch';
import ThemeSwitch from './ThemeSwitch';
import LogoutButton from './LogoutButton'; 

function Navbar({ keyword, keywordChangeHandler, logoutHandler }) {
  const { authedUser } = useContext(AuthedContext);

  return (
    <nav className="navbar">
      {authedUser && <SearchBar keyword={keyword} onKeywordChange={keywordChangeHandler} />}
      <LocaleSwitch />
      <ThemeSwitch />
      {authedUser && <LogoutButton onLogout={logoutHandler} />}
    </nav>  
  )
}

Navbar.propTypes = {
  keyword: string,
  keywordChangeHandler: func,
  logoutHandler: func
}

export default Navbar;