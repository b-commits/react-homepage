/** @jsxImportSource @emotion/react */
import Button from '../Button/Button';
import { buttonGreen } from '../Button/Button.module.style';
import { containerBlue, fullWidthWrap } from '../Header/Header.module.style';
import {
  image,
  content,
  heroResponsive,
  centeredText,
} from './Hero.module.style';

const Hero = () => {
  return (
    <div css={fullWidthWrap}>
      <div className="container-fluid" css={containerBlue}>
        <div
          className="hero-content d-flex align-items-center p-1"
          css={content}
        >
          <div className="row no-margin d-flex justify-content-between">
            <div className="col-md-5 text-white d-flex align-items-center">
              <div css={centeredText}>
                <h2>
                  Welcome to <strong>Tutorialzine</strong>!
                </h2>
                <p className="mt-4" css={heroResponsive}>
                  We are a community of talented developers who learn together.
                  We have an ever-growing library of high-quality tutorials and
                  articles that you can read completely for free!
                </p>
                <div className="stack-sm">
                  <Button text="Browse content" color={buttonGreen} />
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <img
                alt="hero-main"
                src="https://b-commits.github.io/react-homepage/hero.png"
                className="d-none d-md-block"
                css={image}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
