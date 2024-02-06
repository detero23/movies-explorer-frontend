import React from "react";
import { Link } from "react-router-dom";
import green_logo from "../../images/green-logo.svg";

import "./logo.css";
import "./logo__link.css";

export default function Logo({ name }) {
    return (
        <Link className="logo__link" to="/">
            <img className={`logo ${name.toLowerCase()}__logo`} src={green_logo} alt="Зеленое лого"></img>
        </Link>
    );
}
