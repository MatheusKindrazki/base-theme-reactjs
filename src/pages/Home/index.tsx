import React from 'react';

// import { useHistory } from 'react-router-dom';

// import { Typography, Button } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

import FilterBar from '~/components/FilterBar';
import Header from '~/components/Header';

// import { useToast } from '~/hooks/toast';

import { Container } from './styles';

const Home: React.FC = () => {
  // const { addToast } = useToast();

  // const history = useHistory();

  // const dispatchToast = React.useCallback(() => {
  //   addToast({
  //     title: 'Disparo de toast',
  //     type: 'success',
  //   });
  // }, [addToast]);

  return (
    <Container>
      <Header />
      <FilterBar className="filter-container-principal" />
      <main className="main-container">
        <h1>Trilhas</h1>
        <FilterBar className="filter-content-container" />
        <section className="content">
          <header>
            <div>
              <div>1ª série A | Língua Portuguesa | Volume 1| Unidade 1</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ,
                consectetur adipiscing.
              </div>
            </div>
            <div>bloco 2</div>
          </header>
          <div className="table-container">
            <Skeleton
              className="fit-content"
              animation={false}
              variant="rect"
              width={40}
              height={40}
            />
          </div>
        </section>
      </main>
    </Container>
  );
};

export default Home;
