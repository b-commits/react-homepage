/** @jsxImportSource @emotion/react */
import { container } from './components/Header/Header.module.style';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <>
      <div className="container-fluid" css={container}>
        <Header />
        <Hero />
      </div>
    </>
  );
}

export default App;
