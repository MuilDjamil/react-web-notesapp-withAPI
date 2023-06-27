import React from 'react';

const LocaleContext = React.createContext('id');

export const LocaleProvider = LocaleContext.Provider;
export default LocaleContext;