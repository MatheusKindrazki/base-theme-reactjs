import styled from 'styled-components';

// import { device } from '~/styles/devices';

import { IFilterBar } from './types';

export const BackgroundFilterBar = styled.div`
  background-color: #e8e8e8;
`;

export const FilterBarStyled = styled.header<IFilterBar>`
  min-height: 70px;
  padding: 10px 0;
  width: 100%;
  > div {
    background: #ccc;
    margin-bottom: 20px;
    min-height: 50px;
    &:nth-last-child(1) {
      margin-bottom: 0px;
    }
  }
  @media (min-width: 992px) {
    display: flex;
    width: 100%;
    > div {
      flex: 1;
      margin-bottom: 0px;
      margin-right: 20px;
      &:nth-last-child(1) {
        margin-right: 0;
      }
    }
  }
`;
