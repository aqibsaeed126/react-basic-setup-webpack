import React from 'react';
import propTypes from 'prop-types';
import { Redirect, useLocation } from 'react-router-dom';

import routesDictionary from '../../routes/dictionary.json';
import NavBar from '../common/NavBar';

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const found = !!routesDictionary.find(
    route => `/${route.path.split('/')[1]}` === `/${pathname.split('/')[1]}`,
  );
  if (found) {
    return (
      <div className="layout-root">
        <NavBar />
        <React.Fragment>
          <div className="route-root">{children}</div>
        </React.Fragment>
      </div>
    );
  }
  return <Redirect to="/page-not-found" />;
};

Layout.propTypes = {
  location: propTypes.object,
  children: propTypes.any,
};

export default Layout;
