import { Link } from "react-router-dom";

import "./header.css";
import "./header__link-holder.css";
import "./header__link.css";
import "./header__profile-holder.css";
import "./header__login-holder.css";
import "./header__link_type_login.css";

import Logo from "../Logo/Logo";

export default function Header({ loggedIn }) {
    // const location = useLocation();

    return (
        <header className="header">
            <Logo name="Header"></Logo>
            {loggedIn ? (
                <>
                    <nav className="header__link-holder">
                        <Link className="header__link" to="/movies">
                            Фильмы
                        </Link>
                        <Link className="header__link" to="/saved-movies">
                            Сохраненные фильмы
                        </Link>

                    </nav>
                    <div className="header__profile-holder">
                        <Link className="header__link" to="/profile">
                            Аккаунт
                        </Link>
                    </div>
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

        </header>
    );
}
