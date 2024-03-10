import './project.css';
import './project__header.css';
import './project__line.css';
import './project__descriptions.css';
import './project__description-holder.css';
import './project__description-header.css';
import './project__description.css';
import './project__weeks.css';
import './project__week.css';
import './project__week_topleft.css';
import './project__week_topright.css';

function Project() {
    return (<>
        <section className="project" id="Project">
            <h2 className="project__header">О проекте</h2>
            <span className='project__line'></span>
            <div className='project__descriptions'>
                <div className='project__description-holder'>
                    <h3 className='project__description-header'>Дипломный проект включал 5 этапов</h3>
                    <p className='project__description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='project__description-holder'>
                    <h3 className='project__description-header'>На выполнение диплома ушло 5 недель</h3>
                    <p className='project__description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='project__weeks'>
                <div className='project__week project__week_topleft'>1 неделя</div>
                <div className='project__week project__week_topright'>4 недели</div>
                <div className='project__week'>Back-end</div>
                <div className='project__week'>Front-end</div>
            </div>
        </section>
    </>
    );
}

export default Project;
