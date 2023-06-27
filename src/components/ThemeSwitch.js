import React, { useContext } from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';
import LocaleContext from '../contexts/LocaleContext';
import ThemeContext from '../contexts/ThemeContext';

function ThemeSwitch() {
  const { theme, switchTheme } = useContext(ThemeContext);
  const { locale } = useContext(LocaleContext);

  return <button className="theme-switch" onClick={switchTheme}>{theme === 'light' ? <BiMoon className="button-icon" /> : <BiSun className="button-icon" />}{theme === 'light' ? (locale === 'id' ? 'gelap' : 'dark') : (locale === 'id' ? 'terang' : 'light')}</button>
}

export default ThemeSwitch;