/** @jsxImportSource @emotion/react */
import { mockArticles } from './components/Article/mockArticles';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Articles from './components/Article/Article';
import FooterHero from './components/FooterHero/FooterHero';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Articles articles={mockArticles} />
      <FooterHero />
      <Footer />
    </>
  );
}

export default App;
