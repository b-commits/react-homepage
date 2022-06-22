/** @jsxImportSource @emotion/react */
import { SerializedStyles } from '@emotion/react';

interface ButtonProps {
  text: string;
  color: SerializedStyles;
}

const Button = ({ text, color }: ButtonProps) => {
  return (
    <button className="btn btn-success" css={color}>
      {text}
    </button>
  );
};

export default Button;
