import './promo.css';
import './promo__header.css';
import './promo__anchors.css';
import './promo__anchor.css';
import './promo__anchor-holder.css';

function Promo() {
    return (<>
        <section className="promo" id="Promo">
            <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
            <nav className='promo__anchors'>
                <div className='promo__anchor-holder'>
                    <a href='#Project' className='promo__anchor'>О проекте</a>
                </div>
                <div className='promo__anchor-holder'>
                    <a href='#Techs' className='promo__anchor'>Технологии</a>
                </div>
                <div className='promo__anchor-holder'>
                    <a href='#Portfolio' className='promo__anchor'>Студент</a>
                </div>
            </nav>
        </section>
    </>
    );
}

export default Promo;
