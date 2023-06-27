import React, { useContext } from 'react';
import { RiTranslate2 } from 'react-icons/ri';
import LocaleContext from '../contexts/LocaleContext';

function LocaleSwitch() {
  const { locale, switchLocale  } = useContext(LocaleContext);

  return <button className="locale-switch" onClick={switchLocale}><RiTranslate2 className="button-icon" />{locale === 'id' ? 'en' : 'id'}</button>
}

export default LocaleSwitch;