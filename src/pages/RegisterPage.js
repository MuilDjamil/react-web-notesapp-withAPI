import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { func, string } from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';
import { register } from '../utils/network-data';

function RegisterPage({
  setInitiate, 
  email,
  setEmail,
  name,
  setName,
  password,
  setPassword,
  passwordConfirm,
  setPasswordConfirm }) {

  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);

  const registerHandler = (event) => {
    event.preventDefault();
    if (password === passwordConfirm) {
      setInitiate(true);
      register({ name, email, password }).then(({ error }) => {
        if (!error) {
          navigate('/');        
        }
      })
    } else {
      if (locale === 'id') {
        alert('Konfirmasi password salah');
      } else {
        alert('Wrong password confirmation');
      }
    }
  }

  return (
    <form onSubmit={registerHandler}>
      <input type="text" placeholder={locale === 'id' ? "Masukkan nama anda" : "Insert your name"} value={name} onChange={setName} />
      <input type="email" placeholder={locale === 'id' ? "Masukkan email anda" : "Insert your email"} value={email} onChange={setEmail} />
      <input type="password" placeholder={locale === 'id' ? "Buat password anda" : "Make Your password"} value={password} onChange={setPassword} />
      <input type="password" placeholder={locale === 'id' ? "Konfirmasi password anda" : "Confirm Your password"} value={passwordConfirm} onChange={setPasswordConfirm} />
      <button>{locale === 'id' ? "Daftar" : "Register"}</button>
      <p>{locale === 'id' ? "Sudah punya akun ?" : "Already have account ?"} <Link to="/">{locale === 'id' ? "Login disini" : "Login here"}</Link></p>
    </form>
  );
}

RegisterPage.propTypes = {
  setInitiate: func.isRequired,
  email: string.isRequired,
  setEmail: func.isRequired,
  name: string.isRequired,
  setName: func.isRequired,
  password: string.isRequired,
  setPassword: func.isRequired,
  passwordConfirm: string.isRequired,
  setPasswordConfirm: func.isRequired
}

export default RegisterPage;