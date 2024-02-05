import { Link } from "react-router-dom";

import "./form.css";
import "./form__title.css";
import "./form__container.css";
import "./form__input.css";
import "./form__clue.css";
import "./form__button.css";
import "./form__button_type_login.css";
import "./form__button_type_register.css";
import "./form__subtext.css";
import "./form__link.css";
import "./form__error.css";
import "./form__error_active.css";

export default function Form({
    name,
    title,
    onSubmit,
    buttonText,
    subText,
    pageLink,
    linkText,
    children,
}) {

    return (
        <section
            className={`form form_type_${name.toLowerCase()}`}
            id={`form${name}}`}
        >
            <h2 className="form__title">{title}</h2>
            <form
                className="form__container"
                name={`form${name}Form`}
                onSubmit={onSubmit}
            >
                {children}
                <input
                    type="submit"
                    className={`form__button form__button_type_${name.toLowerCase()}`}
                    value={buttonText}
                    name="saveButton"
                />
            </form>
            <p className="form__subtext">
                {subText}
                <Link className="form__link" to={pageLink}>
                    {linkText}
                </Link>
            </p>
        </section >
    );
}
