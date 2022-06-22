/** @jsxImportSource @emotion/react */
import { socials, footerContainer } from './Footer.module.style';

const Footer = () => {
  return (
    <div className="container-fluid " css={footerContainer}>
      <footer className="navbar-nav d-flex align-items-center mt-5">
        <h3 className="opacity-25">A community that learns together.</h3>
        <ul className="list-inline d-flex">
          <li className="m-2">
            <a href="#search">Article license</a>
          </li>
          <li className="m-2">
            <a href="#search">Terms and conditions</a>
          </li>
          <li className="m-2">
            <a href="#search">Privacy policy</a>
          </li>
          <li className="m-2">
            <a href="#search">Contact form</a>
          </li>
          <li className="m-2">
            <a href="#search">The Book</a>
          </li>
        </ul>
        <p className="opacity-25">
          Copyright © Zine EOOD. All Rights Reserved.
        </p>
        <ul className="d-flex" css={socials}>
          <li>
            <i className="bi bi-facebook m-3" role="button" />
          </li>
          <li>
            <i className="bi bi-twitter m-3" role="button" />
          </li>
          <li>
            <i className="bi bi-github m-3" role="button" />
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
