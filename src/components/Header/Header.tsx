/** @jsxImportSource @emotion/react */
import { logo, container, hamburger } from './Header.module.style';
import Button from '../Button/Button';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark pt-3">
      <div className="container-fluid " css={container}>
        <div className="nav-item">
          <a className="bi bi-list text-white d-md-none" css={hamburger}></a>
          <a
            css={logo}
            className="text-decoration-none navbar-brand nav-item me-4 d-none d-md-inline"
          >
            tutorial<span>zine</span>
          </a>
          <a className="text-decoration-none text-white d-none d-md-inline">
            Articles
          </a>
        </div>
        <ul className="navbar-nav nav-item align-items-center" id="navmenu">
          <li className="nav-item me-4">
            <a className="bi bi-search text-white" />
          </li>
          <li className="nav-item d-none d-md-inline">
            <Button className="nav-item" text="Join Dev Awesome" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
