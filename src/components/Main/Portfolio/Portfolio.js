import selfie from "../../../images/selfie.jpg";

import "./portfolio.css";
import "./portfolio__student.css";
import "./portfolio__line.css";
import "./portfolio__profile.css";
import "./portfolio__profile-holder.css";
import "./portfolio__profile-name.css";
import "./portfolio__profile-job.css";
import "./portfolio__profile-bio.css";
import "./portfolio__profile-git.css";
import "./portfolio__photo.css";
import "./portfolio__header.css";
import "./portfolio__links.css";
import "./portfolio__link.css";
import "./portfolio__link-name.css";
import "./portfolio__link-arrow.css";

function Portfolio() {
    return (<>
        <section className="portfolio" id="Project">
            <h2 className="portfolio__student">Студент</h2>
            <span className='portfolio__line'></span>
            <div className="portfolio__profile">
                <div className="portfolio__profile-holder">
                    <h3 className="portfolio__profile-name">Дмитрий</h3>
                    <p className="portfolio__profile-job">Ведущий BI-разработчик, 37 лет</p>
                    <p className="portfolio__profile-bio">Переписать!!! Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <a className="portfolio__profile-git" target="_blank" rel="noopener noreferrer" href="https://github.com/detero23" >Github</a>
                </div>
                <img className="portfolio__photo" src={selfie} alt="Селфи"></img>
            </div>
            <h3 className="portfolio__header">Портфолио</h3>
            <nav className="portfolio__links">
                <a className="portfolio__link" target="_blank" href="https://github.com/detero23/russian-travel" rel="noopener noreferrer">
                    <p className="portfolio__link-name">Статичный сайт</p>
                    <p className="portfolio__link-arrow">↗</p>
                </a>
                <span className='portfolio__line portfolio__line_gray'></span>
                <a className="portfolio__link" target="_blank" href="https://github.com/detero23/mesto" rel="noopener noreferrer">
                    <p className="portfolio__link-name">Адаптивный сайт</p>
                    <p className="portfolio__link-arrow">↗</p>
                </a>
                <span className='portfolio__line portfolio__line_gray'></span>
                <a className="portfolio__link" target="_blank" href="https://github.com/detero23/mesto-react" rel="noopener noreferrer">
                    <p className="portfolio__link-name">Одностраничное приложение</p>
                    <p className="portfolio__link-arrow">↗</p>
                </a>
            </nav>
        </section>
    </>
    );
}

export default Portfolio;
