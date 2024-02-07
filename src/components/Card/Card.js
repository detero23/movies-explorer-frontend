import "./card.css";
import "./card__holder.css";
import "./card__image.css";
import "./card__save.css";
import "./card__checkmark-holder.css";
import "./card__checkmark.css";
import "./card__cross-holder.css";
import "./card__cross.css";
import "./card__description.css";
import "./card__name.css";
import "./card__runtime.css";
import "./card__runtime-holder.css";

import checkmark from "../../images/checkmark.svg";
import cross from "../../images/delete.svg";

export default function Card({ src, name, runtime, saved, ownList }) {
    return (
        <section className="card">
            <div className="card__holder">
                <img className="card__image" src={src} alt="Превью фильма"></img>
                {ownList ?
                    <button className="card__cross-holder">
                        <img className="card__cross" src={cross} alt="Крестик"></img>
                    </button> : <></>
                }
                {saved & !ownList ?
                    <button className="card__checkmark-holder">
                        <img className="card__checkmark" src={checkmark} alt="Галочка"></img>
                    </button> : <></>
                }
                {!saved & !ownList ?
                    <button className="card__save">Сохранить</button> : <></>
                }
            </div>
            <div className="card__description">
                <h3 className="card__name">{name}</h3>
                <div className="card__runtime-holder">
                    <p className="card__runtime">{runtime}</p>
                </div>
            </div>
        </section>
    );
}
