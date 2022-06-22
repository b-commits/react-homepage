/** @jsxImportSource @emotion/react */
import { buttonStyle } from './Button.module.style';

const Button = ({ text }: any) => {
  return (
    <button className="btn btn-success" css={buttonStyle}>
      {text}
    </button>
  );
};

export default Button;
