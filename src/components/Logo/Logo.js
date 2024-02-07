import React from "react";
import { Link } from "react-router-dom";
import green_logo from "../../images/green-logo.svg";

import "./header__logo.css";
import "./header__logo-link.css";

export default function Logo({ name }) {
    return (
        <Link className={`${name.toLowerCase()}__logo-link`} to="/">
            <img className={`${name.toLowerCase()}__logo`} src={green_logo} alt="Зеленое лого"></img>
        </Link>
    );
}
