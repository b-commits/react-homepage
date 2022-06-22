/** @jsxImportSource @emotion/react */
import { logo, hamburger, input } from './Header.module.style';
import { blueContainer, fullWidthWrapBlue } from '../../shared/shared.style';
import { buttonGreen } from '../Button/Button.module.style';
import Button from '../Button/Button';

const Header = () => {
  return (
    <div css={fullWidthWrapBlue}>
      <div className="container-fluid" css={blueContainer}>
        <div id="searchbar" className="collapse opacity-50">
          <input type="search" placeholder="Search..." css={input} />
        </div>
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
                  className="bi bi-search text-white"
                  data-bs-toggle="collapse"
                  href="#searchbar"
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
