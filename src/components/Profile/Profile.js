import React from "react";

import './profile.css';
import './profile__header.css';
import './profile__names.css';
import './profile__name-holder.css';
import './profile__name.css';
import './profile__edit.css';
import './profile__logout.css';
import './profile__line.css';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from "../Header/Header";

function Profile({ loggedIn, onLogout }) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      <Header loggedIn={loggedIn}></Header>
      <section className="profile">
        <h1 className='profile__header'>{`Привет, ${currentUser.name}!`}</h1>
        <div className="profile__names">
          <div className="profile__name-holder">
            <p className="profile__name">Имя</p>
            <p className="profile__name">{currentUser.name}</p>
          </div>
          <span className="profile__line"></span>
          <div className="profile__name-holder">
            <p className="profile__name">E-mail</p>
            <p className="profile__name">{currentUser.email}</p>
          </div>
        </div>
        <button className="profile__edit">Редактировать</button>
        <button className="profile__logout" onClick={onLogout}>Выйти из аккаунта</button>
      </section>
    </>
  );
}

export default Profile;
