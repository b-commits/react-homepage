import { css } from '@emotion/react';

const breakpoints = [576, 768];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const image = css({
  height: '370px',
  borderRadius: '3px',
});

export const content = css({
  minHeight: 'calc(100vh - 80px)',
});

export const heroResponsive = css({
  fontSize: '22px',
});

export const centeredText = css({
  [mq[0]]: {
    textAlign: 'center',
    maxHeight: '200px',
  },
});
