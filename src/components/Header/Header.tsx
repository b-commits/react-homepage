/** @jsxImportSource @emotion/react */
import { logo, hamburger } from './Header.module.style';
import Button from '../Button/Button';
import { blueContainer, fullWidthWrapBlue } from '../../shared/shared.style';
import { buttonGreen } from '../Button/Button.module.style';

const Header = () => {
  return (
    <div css={fullWidthWrapBlue}>
      <div className="container-fluid" css={blueContainer}>
        <nav className="navbar navbar-expand-md navbar-dark pt-3">
          <div className="container-fluid" css={blueContainer}>
            <div className="nav-item">
              <a
                href="#search"
                className="bi bi-list text-white d-md-none"
                css={hamburger}
              >
                {' '}
              </a>
              <a
                href="#search"
                css={logo}
                className="text-decoration-none navbar-brand nav-item me-4 d-none d-md-inline"
                role="button"
              >
                tutorial<span>zine</span>
              </a>
              <a
                href="#search"
                className="text-decoration-none text-white d-none d-md-inline"
                role="button"
              >
                Articles
              </a>
            </div>
            <ul className="navbar-nav nav-item align-items-center" id="navmenu">
              <li className="nav-item me-4">
                <a
                  href="#search"
                  className="bi bi-search text-white"
                  role="button"
                >
                  {' '}
                </a>
              </li>
              <li className="nav-item d-none d-md-inline">
                <Button text="Join Dev Awesome" color={buttonGreen} />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
