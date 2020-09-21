import baseStyled, { ThemedStyledInterface } from 'styled-components';

import * as colors from './colors';
import { device } from './devices';
import materialUI from './material-ui';

export const theme = {
  colors: {
    ...colors.default,
  },
  devices: { ...device },
};

export type Theme = typeof theme;
const styled = baseStyled as ThemedStyledInterface<Theme>;

export { styled, materialUI };
