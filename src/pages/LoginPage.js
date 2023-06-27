import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { func, string} from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';
import { login, putAccessToken } from '../utils/network-data';

function LoginPage({ setInitiate, email, setEmail, password, setPassword }) {
  const { locale } = useContext(LocaleContext);

  const onLogin = (event) => {
    event.preventDefault();
    setInitiate(true);
    login({ email, password }).then(({ error, data }) => {
      if (!error) {
        const { accessToken } = data;
        putAccessToken(accessToken);
        setInitiate(true);
      }
    });
  };

  return (
    <form onSubmit={onLogin} >
      <input type="email" placeholder={locale === 'id' ? "Masukkan email..." : "Input your email..."} value={email} onChange={setEmail} />
      <input type="password" placeholder={locale === 'id' ? "Masukkan password..." : "Input your password..."} value={password} onChange={setPassword} />
      <button>{locale === 'id' ? "Masuk" : "Login"}</button>
      <p>{locale === 'id' ? "Belum punya akun ?" : "Don't have an account ?"} <Link to="/register"> {locale === 'id' ? "Daftar disini" : "Register here"}</Link></p>
    </form>
  );
}

LoginPage.propTypes = {
  setInitiate: func.isRequired,
  email: string.isRequired,
  setEmail: func.isRequired,
  password: string.isRequired,
  setPassword: func.isRequired
}

export default LoginPage;