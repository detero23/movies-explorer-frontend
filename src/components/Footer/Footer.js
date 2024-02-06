import "./footer.css";
import "./footer__text.css";
import "./footer__line.css";
import "./footer__links-holder.css";
import "./footer__copyright.css";
import "./footer__links.css";
import "./footer__link.css";

export default function Footer() {
    const curYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <span className='footer__line'></span>
            <div className="footer__links-holder">
                <small className="footer__copyright">&copy; {curYear}</small>
                <nav className="footer__links">
                    <a className="footer__link" target="_blank" href="https://practicum.yandex.ru/" rel="noopener noreferrer">Яндекс.Практикум</a>
                    <a className="footer__link" target="_blank" href="https://github.com/" rel="noopener noreferrer">Github</a>
                </nav>
            </div>
        </footer>
    );
}
