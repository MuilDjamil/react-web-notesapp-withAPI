import React, { useContext } from 'react';
import { BiLogOutCircle } from 'react-icons/bi';
import { func } from 'prop-types';
import AuthedContext from '../contexts/AuthedContext'; 

function LogoutButton({ onLogout }) {
  const { authedUser } = useContext(AuthedContext);

  return <button className="logout-button" onClick={onLogout}><BiLogOutCircle className="button-icon" />{authedUser.name}</button>
}

LogoutButton.propTypes = {
  onLogout: func.isRequired
}

export default LogoutButton;