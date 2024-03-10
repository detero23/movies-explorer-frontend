import React from "react";

import "./search.css";
import "./search__container.css";
import "./search__input.css";
import "./search__button.css";
import "./search__trigger-holder.css";
import "./search__trigger.css";
import "./search__trigger-name.css";
import "./search__line.css";

import searchBtn from '../../images/search.svg'
import thumbBtnOn from '../../images/smalltumb-on.svg'
import thumbBtnOff from '../../images/smalltumb-off.svg'

export default function Search({ onSubmit }) {
    const [request, setRequest] = React.useState("");
    const [trigger, setTrigger] = React.useState(true);

    function handleRequestChange(e) {
        setRequest(e.target.value);
    }

    function handleTriggerChange(e) {
        setTrigger(!trigger);
    }

    return (
        <section className="search">
            <form
                className="search__container"
                onSubmit={onSubmit}>
                <input
                    type="text"
                    className="search__input"
                    placeholder="Фильм"
                    id="inputMovieSearch"
                    value={request}
                    onChange={handleRequestChange}
                    required
                />
                <input
                    type="image"
                    className={`search__button`}
                    name="searchButton"
                    value=""
                    src={searchBtn}
                    alt="Кнопка поиска"
                />
            </form>
            <div className="search__trigger-holder">
                <input type="image" className="search__trigger" src={trigger ? thumbBtnOn : thumbBtnOff} alt="Триггер" onClick={handleTriggerChange}></input>
                <p className="search__trigger-name">Короткометражки</p>
            </div>
            <span className="search__line"></span>
        </section >
    );
}
