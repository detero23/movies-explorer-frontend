import './notFound.css';
import './notFound__mainText.css'
import './notFound__subText.css'
import './notFound__backLink.css'

function NotFound({ onPrevious }) {
  return (
    <main>
      <section className="notFound">
        <h2 className="notFound__mainText">404</h2>
        <p className="notFound__subText">Страница не найдена</p>
        <button
          type="button"
          className="notFound__backLink"
          onClick={onPrevious}
        >Назад</button>
      </section>
    </main>
  );
}

export default NotFound;
