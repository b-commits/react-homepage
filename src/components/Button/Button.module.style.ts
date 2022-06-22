import { css } from '@emotion/react';

const green = css({
  backgroundColor: '#3dd07d',
  borderColor: '#3dd07d',
});

const red = css({
  backgroundColor: '#ED0F78',
  borderColor: '#ED0F78',
});

export const buttonBase = css({
  fontSize: '.9em',
  fontWeight: 700,
  border: '1px solid transparent',
  borderRadius: '3px',
  padding: '10px 16px 10px 16px',
});

export const buttonGreen = css(buttonBase, green);
export const buttonRed = css(buttonBase, red);
