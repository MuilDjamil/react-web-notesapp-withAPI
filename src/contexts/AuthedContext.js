import React from 'react';

const AuthedContext = React.createContext(false);

export const AuthedProvider = AuthedContext.Provider;
export default AuthedContext;