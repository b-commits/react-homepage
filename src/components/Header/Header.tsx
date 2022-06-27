/** @jsxImportSource @emotion/react */
import { logo, hamburger, input, searchbar } from './Header.module.style';
import { blueContainer, fullWidthWrapBlue } from '../../shared/shared.style';
import { buttonGreen } from '../Button/Button.module.style';
import Button from '../Button/Button';

const Header = () => {
  return (
    <div css={fullWidthWrapBlue}>
      <div className="container-fluid" css={blueContainer}>
        <nav className="navbar navbar-expand-md navbar-dark pt-3">
          <div className="container-fluid" css={blueContainer}>
            <div className="nav-item d-flex align-items-center">
              <a
                href="#search"
                className="bi bi-list text-white d-md-none"
                css={hamburger}
              ></a>
              <a
                href="#search"
                css={logo}
                className="text-decoration-none navbar-brand nav-item me-4 d-none d-md-inline"
                role="button"
              >
                tutorial<span>zine</span>
              </a>

              <div className="multi-collapse show-bs-collapse show">
                <a
                  id="searchbar"
                  className="text-decoration-none text-white d-none d-md-inline"
                  role="button"
                >
                  Articles
                </a>
              </div>
              <div
                className="collapse opacity-50 multi-collapse position-fixed"
                css={searchbar}
              >
                <input type="search" placeholder="Search..." css={input} />
              </div>
            </div>
            <ul className="navbar-nav nav-item align-items-center" id="navmenu">
              <li className="nav-item me-4">
                <a
                  className="bi bi-search text-white"
                  data-bs-toggle="collapse"
                  href=".multi-collapse"
                  role="button"
                ></a>
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
