import React from 'react';

import { useHistory } from 'react-router-dom';

import { Typography, Button } from '@material-ui/core';

import { useToast } from '~/hooks/toast';

import { Container } from './styles';

const Example: React.FC = () => {
  const { addToast } = useToast();

  const history = useHistory();

  const dispatchToast = React.useCallback(() => {
    addToast({
      title: 'Disparo de toast',
      type: 'success',
    });
  }, [addToast]);

  return (
    <Container>
      <Typography variant="h1">Material UI</Typography>

      <div className="margin">
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push('/teste')}
        >
          Testar rotas
        </Button>

        <Button variant="outlined" color="secondary" onClick={dispatchToast}>
          Testar toast
        </Button>
      </div>
    </Container>
  );
};

export default Example;
