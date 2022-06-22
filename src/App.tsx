/** @jsxImportSource @emotion/react */
import {
  containerBlue,
  containerWhite,
  fullWidthWrap,
} from './components/Header/Header.module.style';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Article from './components/Article/Article';
import FooterHero from './components/FooterHero/FooterHero';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Article />
      <FooterHero />
      <Footer />
    </>
  );
}

export default App;
