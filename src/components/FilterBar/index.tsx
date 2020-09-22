import React from 'react';

import { BackgroundFilterBar, FilterBarStyled } from './styled';
import { IFilterBar } from './types';

const FilterBar: React.FC<IFilterBar> = ({ className }) => {
  return (
    <BackgroundFilterBar className={className}>
      <FilterBarStyled className="main-container">
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
      </FilterBarStyled>
    </BackgroundFilterBar>
  );
};

export default FilterBar;
