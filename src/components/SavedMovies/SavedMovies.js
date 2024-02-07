import './savedmovies.css';
import './savedmovies__list.css';
import './savedmovies__more.css';

import Card from '../Card/Card';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Search from '../Search/Search';

import example_1 from "../../images/example_movie_1.png";
import example_2 from "../../images/example_movie_2.png";
import example_3 from "../../images/example_movie_3.png";


function SavedMovies({ loggedIn }) {
  const ownList = true;

  return (
    <>
      <Header loggedIn={loggedIn}></Header>
      <section className='savedmovies'>
        <Search></Search>
        <div className='savedmovies__list'>
          <Card src={example_1} name="33 слова о дизайне" runtime="1ч 17м" ownList={ownList}></Card>
          <Card src={example_2} name="Киноальманах «100 лет дизайна»" runtime="1ч 17м" saved={true} ownList={ownList}></Card>
          <Card src={example_3} name="В погоне за Бенкси" runtime="1ч 17м" ownList={ownList}></Card>
        </div>
        <button className='savedmovies__more'></button>
      </section>
      <Footer></Footer>
    </>
  );
}

export default SavedMovies;
