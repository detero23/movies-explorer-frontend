import React from "react";
import green_logo from "../../images/green-logo.svg";

import "./logo.css";

export default function Logo({ name }) {
    return (
        <img className={`logo ${name.toLowerCase()}__logo`} src={green_logo} alt="Зеленое лого"></img>
    );
}
