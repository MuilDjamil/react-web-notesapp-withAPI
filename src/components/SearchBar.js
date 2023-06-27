import React, { useContext } from 'react';
import { string, func } from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';

function SearchBar({ keyword, onKeywordChange }) {
  const { locale } = useContext(LocaleContext);

  return (
    <input 
      className="search-bar"
      type="text"
      placeholder={locale === 'id' ? "Cari catatan..." : "Search notes..."}
      value={keyword}
      onChange={(event) => onKeywordChange(event.target.value)}
    />
  )
}

SearchBar.propTypes = {
  keyword: string.isRequired,
  onKeywordChange: func.isRequired
}

export default SearchBar;