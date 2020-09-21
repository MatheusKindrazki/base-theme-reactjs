import React from 'react';

import { useHistory } from 'react-router-dom';

import { Typography, Button } from '@material-ui/core';

import { Container } from './styles';

const Teste: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Typography variant="h1">Rota teste</Typography>

      <div className="margin">
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push('/dashboard')}
        >
          voltar
        </Button>
      </div>
    </Container>
  );
};

export default Teste;
