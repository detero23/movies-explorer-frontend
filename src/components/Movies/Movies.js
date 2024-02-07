import './movies.css';
import './movies__list.css';
import './movies__more.css';

import Card from '../Card/Card';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Search from '../Search/Search';

import example_1 from "../../images/example_movie_1.png";
import example_2 from "../../images/example_movie_2.png";
import example_3 from "../../images/example_movie_3.png";
import example_4 from "../../images/example_movie_4.png";


function Movies({ loggedIn }) {
  const ownList = false;

  return (
    <>
      <Header loggedIn={loggedIn}></Header>
      <main>
        <section className='movies'>
          <Search></Search>
          <div className='movies__list'>
            <Card src={example_1} name="33 слова о дизайне" runtime="1ч 17м" ownList={ownList}></Card>
            <Card src={example_2} name="Киноальманах «100 лет дизайна»" runtime="1ч 17м" saved={true} ownList={ownList}></Card>
            <Card src={example_3} name="В погоне за Бенкси" runtime="1ч 17м" ownList={ownList}></Card>
            <Card src={example_4} name="Баския: Взрыв реальности" runtime="1ч 17м" saved={true} ownList={ownList}></Card>
            <Card src={example_1} name="33 слова о дизайне" runtime="1ч 17м" ownList={ownList}></Card>
            <Card src={example_2} name="Киноальманах «100 лет дизайна»" runtime="1ч 17м" saved={true} ownList={ownList}></Card>
            <Card src={example_3} name="В погоне за Бенкси" runtime="1ч 17м" ownList={ownList}></Card>
            <Card src={example_4} name="Баския: Взрыв реальности" runtime="1ч 17м" saved={true} ownList={ownList}></Card>
            <Card src={example_1} name="33 слова о дизайне" runtime="1ч 17м" ownList={ownList}></Card>
            <Card src={example_2} name="Киноальманах «100 лет дизайна»" runtime="1ч 17м" saved={true} ownList={ownList}></Card>
            <Card src={example_3} name="В погоне за Бенкси" runtime="1ч 17м" ownList={ownList}></Card>
            <Card src={example_4} name="Баския: Взрыв реальности" runtime="1ч 17м" saved={true} ownList={ownList}></Card>
          </div>
          <button className='movies__more'>Ещё</button>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Movies;
