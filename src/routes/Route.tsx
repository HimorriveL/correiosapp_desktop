import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDomRouteProps,
  Redirect,
} from 'react-router-dom';
import Header from '../components/Header';
import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDomRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}


const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {

  const { user } = useAuth();
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <>
            <Header />
            <Component />
          </>
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : 'dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;