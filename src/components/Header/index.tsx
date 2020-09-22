import React from 'react';

import Skeleton from '@material-ui/lab/Skeleton';

import { Header as HeaderStyled } from './styled';

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <div className="main-container">
        <div className="wrapper">
          <div className="logo">
            <Skeleton animation={false} variant="rect" width={40} height={40} />
            <span className="logo-title">LOGO</span>
          </div>
          <Skeleton animation={false} variant="circle" width={40} height={40} />
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
