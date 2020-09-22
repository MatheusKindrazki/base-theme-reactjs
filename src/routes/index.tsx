import React from 'react';

import { Switch } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { useToast, ToastProps } from '~/hooks/toast';
import Home from '~/pages/Home';
import { removeToast } from '~/store/modules/toast/actions';

import Teste from '../pages/Teste';
import Route from './Route';

const Routes: React.FC = () => {
  const dispatch = useDispatch();

  const { addToast } = useToast();

  const toast = useSelector((state: Store.State) => state.toast);

  if (toast.message.title) {
    dispatch(removeToast());

    addToast(toast.message as ToastProps);
  }

  return (
    <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/dashboard" component={Home} isPrivate />
      <Route path="/teste" component={Teste} isPrivate />
    </Switch>
  );
};

export default Routes;
