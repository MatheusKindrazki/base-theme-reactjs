import React from 'react';

import {
  RouteProps as ReactRouteProps,
  Route as ReactRoute,
  Redirect,
} from 'react-router-dom';

import Auth from '~/layouts/Auth';
import Logged from '~/layouts/Logged';

interface RouteProps extends ReactRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const signed = true;

  const RenderLayout = signed ? Logged : Auth;

  return (
    <ReactRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!signed ? (
          <RenderLayout>
            <Component />
          </RenderLayout>
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
