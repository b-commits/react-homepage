/** @jsxImportSource @emotion/react */
import { SerializedStyles } from '@emotion/react';

interface inputProps {
  text: string;
  color: SerializedStyles;
}

const Button = ({ text, color }: inputProps) => {
  return (
    <button className="btn btn-success" css={color}>
      {text}
    </button>
  );
};

export default Button;
