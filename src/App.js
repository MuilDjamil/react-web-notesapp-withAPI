import React, { useState, useMemo, useEffect } from 'react';
import { Routes, Route, useSearchParams, useNavigate } from 'react-router-dom';
import useInput from './hooks/useInput';
import Navbar from './components/Navbar';
import Sidenav from './components/Sidenav';
import NotesPage from './pages/NotesPage';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { AuthedProvider } from './contexts/AuthedContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { LocaleProvider } from './contexts/LocaleContext'; 
import { getUserLogged, putAccessToken } from './utils/network-data';

function App() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => (searchParams.get('keyword') || ''));
  const [theme, setTheme] = useState(() => (localStorage.getItem('theme') || 'light'));
  const [locale, setLocale] = useState(() => (localStorage.getItem('locale') || 'id'));
  const [authedUser, setAuthedUser] = useState(null);
  const [initiate, setInitiate] = useState(true);
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

  const [regName, setRegName] = useInput('');
  const [passwordConfirm, setPasswordConfirm] = useInput('');

  const authedUserValue = useMemo(() => ({
    authedUser,
    setAuthedUser
  }), [authedUser]);

  const themeValue = useMemo(() => ({
    theme,
    switchTheme: () => {
      setTheme((prevTheme) => {
        const theme = prevTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        return theme;
      });
    }
  }), [theme]);

  const localeValue = useMemo(() => ({
    locale,
    switchLocale: () => {
      setLocale((prevLocale) => {
        const locale = prevLocale === 'id' ? 'en' : 'id';
        localStorage.setItem('locale', locale);
        return locale;
      });
    }
  }), [locale]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthedUser(data);
    }).finally(() => {
      setInitiate(false);
    });
  }, [initiate]);

  const logoutHandler = () => {
    putAccessToken('');
    if (locale === 'id') {
      alert('Anda berhasil keluar');
    } else {
      alert('Logout Success');
    }
    setAuthedUser(null);
    navigate('/');
  }

  const keywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  if (initiate) {
    return (
      <div className="notes-app-front">
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
    );
  }

  if (authedUser === null) {
    return (
      <ThemeProvider value={themeValue}>
        <LocaleProvider value={localeValue}>
          <div className="notes-app-front">
            <header className="notes-app__header">
              <h1>{locale === 'id' ? "Aplikasi Catatan SPA" : "Notes App SPA"}</h1>
              <Navbar />
            </header>
            <main className="notes-app-front__main">
              <Routes>
                <Route path="/" element={<LoginPage setInitiate={setInitiate} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />} />

                <Route path="/register" element={<RegisterPage setInitiate={setInitiate} email={email} setEmail={setEmail} name={regName} setName={setRegName} password={password} setPassword={setPassword} passwordConfirm={passwordConfirm} setPasswordConfirm={setPasswordConfirm} />} />
                
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
          </div>
        </LocaleProvider>
      </ThemeProvider>
    );
  }

  return (
    <AuthedProvider value={authedUserValue}>
      <ThemeProvider value={themeValue}>
        <LocaleProvider value={localeValue}>
          <div className="notes-app">
            <header className="notes-app__header">
              <h1>{locale === 'id' ? "Aplikasi Catatan SPA" : "Notes App SPA"}</h1>
              <Navbar keyword={keyword} keywordChangeHandler={keywordChangeHandler} logoutHandler={logoutHandler} />
            </header>
            <Sidenav />
            <main className="notes-app__main">
              <Routes>
                <Route path="/" element={<NotesPage keyword={keyword} />} />
                <Route path="/notes" element={<NotesPage keyword={keyword} />} />
                <Route path="/archive" element={<ArchivePage keyword={keyword} />} />
                <Route path="/notes/:id" element={<DetailPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
          </div>
        </LocaleProvider>  
      </ThemeProvider>
    </AuthedProvider>
  )
}

export default App;
