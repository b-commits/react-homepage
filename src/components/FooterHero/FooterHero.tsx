/** @jsxImportSource @emotion/react */
import Button from '../Button/Button';
import { buttonRed } from '../Button/Button.module.style';
import { navyContainer, fullWidthWrapNavy } from '../../shared/shared.style';
import { centeredText } from '../Hero/Hero.module.style';
import { image, content, heroResponsive } from './FooterHero.module.style';

const FooterHero = () => {
  return (
    <div css={fullWidthWrapNavy}>
      <div className="container-fluid" css={navyContainer}>
        <div
          className="hero-content d-flex align-items-center p-1"
          css={content}
        >
          <div className="row no-margin d-flex justify-content-between">
            <div className="col-md-6 d-flex justify-content-end">
              <img
                alt="hero-main"
                src="https://b-commits.github.io/react-homepage/hero.png"
                className="d-none d-md-block"
                css={image}
              ></img>
            </div>
            <div className="col-md-5 text-white d-flex align-items-center">
              <div css={centeredText}>
                <h2>
                  Dev <strong>Awesome</strong>!
                </h2>
                <p className="mt-4" css={heroResponsive}>
                  A weekly newsletter full of programming news, cool libraries,
                  and productivity tips. Subscribe now and join
                  <strong>over 80k developers!</strong>
                </p>
                <div className="stack-sm">
                  <Button text="Browse content" color={buttonRed} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterHero;
