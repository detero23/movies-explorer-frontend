import './techs.css';
import './techs__header.css';
import './techs__line.css';
import './techs__accent.css';
import './techs__subaccent.css';
import './techs__holder.css';
import './techs__tech.css';

function Techs() {
    return (<>
        <section className="techs" id="Techs">
            <h2 className="techs__header">Технологии</h2>
            <span className='techs__line'></span>
            <h2 className="techs__accent">7 технологий</h2>
            <p className="techs__subaccent">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="techs__holder">
                <li className="techs__tech">HTML</li>
                <li className="techs__tech">CSS</li>
                <li className="techs__tech">JS</li>
                <li className="techs__tech">React</li>
                <li className="techs__tech">Git</li>
                <li className="techs__tech">Express.js</li>
                <li className="techs__tech">mongoDB</li>
            </ul>
        </section>
    </>
    );
}

export default Techs;
