/** @jsxImportSource @emotion/react */
import { containerWhite } from '../Header/Header.module.style';
import { buttonGreen } from '../Button/Button.module.style';
import { cardTitle, cardDescription, card } from './Article.module.style';
import Button from '../Button/Button';

const Article = () => {
  return (
    <div className="container-fluid" css={containerWhite}>
      <h2>Latest articles</h2>
      <div className="row bg-white pt-4">
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="card" css={card}>
            <img src="/git.png" className="card-img-top" />
            <div className="card-body">
              <h4 className="card-title" css={cardTitle}>
                Useful Git Tips that Every Developer Should Know
              </h4>
              <p css={cardDescription} className="card-body">
                Git
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card" css={card}>
            <img src="/game.png" className="card-img-top" />
            <div className="card-body">
              <h4 className="card-title" css={cardTitle}>
                10 Machine Learning Examples in JavaScript
              </h4>
              <p css={cardDescription} className="card-body">
                Git
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card" css={card}>
            <img src="/freebie.jpeg" className="card-img-top" />
            <div className="card-body">
              <h4 className="card-title" css={cardTitle}>
                JavaScript Async/Await Explained in 10 Minutes
              </h4>
              <p css={cardDescription} className="card-body">
                Git
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card" css={card}>
            <img src="/js.png" className="card-img-top" />
            <div className="card-body">
              <h4 className="card-title" css={cardTitle}>
                15 Essential Plugins for Visual Studio Code
              </h4>
              <p css={cardDescription} className="card-body">
                Git
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card" css={card}>
            <img src="/plugins.png" className="card-img-top" />
            <div className="card-body">
              <h4 className="card-title" css={cardTitle}>
                Freebie: 4 Bootstrap Gallery Templates
              </h4>
              <p css={cardDescription} className="card-body">
                Git
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card" css={card}>
            <img src="/game.png" className="card-img-top" />
            <div className="card-body">
              <h4 className="card-title" css={cardTitle}>
                10 Amazing JavaScript Games In Under 13kB of Code
              </h4>
              <p css={cardDescription} className="card-body">
                Git
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5 mb-5">
        <Button color={buttonGreen} text="See all articles" />
      </div>
    </div>
  );
};

export default Article;
