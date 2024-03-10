import './main.css';

import Header from '../Header/Header';
import Promo from './Promo/Promo';
import Project from './Project/Project';
import Techs from './Techs/Techs';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main({ loggedIn }) {

  return (<>
    <Header loggedIn={loggedIn}></Header>
    <main className="main">
      <Promo></Promo>
      <Project></Project>
      <Techs></Techs>
      <Portfolio></Portfolio>
    </main>
    <Footer></Footer>
  </>
  );
}

export default Main;
