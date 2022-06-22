import { css } from '@emotion/react';
import { primary } from '../../shared/shared.style';

export const buttonStyle = css({
  color: 'red',
});

export const logo = css({
  color: 'white',
  fontWeight: '700',
  fontSize: '26px',
});

export const hamburger = css({
  fontSize: '1.5rem',
  marginLeft: '10px',
});

export const input = css({
  fontSize: '1.5em',
  minHeight: '50px',
  minWidth: '1200px',
  background: primary,
  color: 'white',
  border: 'none',
  '::placeholder': {
    color: 'white',
  },
  ':focus': {
    outline: 'none',
  },
});
