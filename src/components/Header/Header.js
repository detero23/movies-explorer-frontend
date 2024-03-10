import { Link } from "react-router-dom";
import React from "react";

import "./header.css";
import "./header__link-holder.css";
import "./header__link-holder-auth.css";
import "./header__link.css";
import "./header__profile-holder.css";
import "./header__link-auth.css";
import "./header__profile-holder-auth.css";
import "./header__login-holder.css";
import "./header__link_type_login.css";
import "./header__menu-btn.css";
import "./header__menu.css";
import "./header__link-menu.css";
import "./header__link-menu_account.css";
import "./header__link-holder-menu.css";
import "./header__profile-holder-menu.css";
import "./header__menu-cover.css";
import "./header__menu-close.css";

import Logo from "../Logo/Logo";
import menuOpen from '../../images/menu.svg';
import menuClose from '../../images/menuclose.svg';

export default function Header({ loggedIn }) {
    // const location = useLocation();
    const [openedMenu, setOpenedMenu] = React.useState(false);

    function handleMenuChange(e) {
        setOpenedMenu(!openedMenu);
    }

    return (
        <header className="header">
            <Logo name="Header"></Logo>
            {loggedIn ? (
                <>
                    <nav className="header__link-holder-auth">
                        <Link className="header__link-auth" to="/movies">
                            Фильмы
                        </Link>
                        <Link className="header__link-auth" to="/saved-movies">
                            Сохраненные фильмы
                        </Link>
                    </nav>
                    <div className="header__profile-holder-auth">
                        <Link className="header__link-auth" to="/profile">
                            Аккаунт
                        </Link>
                    </div>
                    <input className="header__menu-btn" type="image" src={menuOpen} alt="Меню" onClick={handleMenuChange}></input>
                </>
            ) : (
                <nav className="header__link-holder">
                    <Link className="header__link" to="/signup">
                        Регистрация
                    </Link>
                    <div className="header__login-holder">
                        <Link className="header__link header__link_type_login" to="/signin">
                            Войти
                        </Link>
                    </div>
                </nav>
            )}
            {openedMenu ? <>
                <div className="header__menu-cover"></div>
                <div className="header__menu">
                    <nav className="header__link-holder-menu">
                        <Link className="header__link-menu" to="/">
                            Главная
                        </Link>
                        <Link className="header__link-menu" to="/movies">
                            Фильмы
                        </Link>
                        <Link className="header__link-menu" to="/saved-movies">
                            Сохраненные фильмы
                        </Link>
                    </nav>
                    <div className="header__profile-holder-menu">
                        <Link className="header__link-menu header__link-menu_account" to="/profile">
                            Аккаунт
                        </Link>
                    </div>
                </div>
                <input className="header__menu-close" type="image" src={menuClose} alt="Меню" onClick={handleMenuChange}></input></>
                : <></>
            }

        </header>
    );
}
