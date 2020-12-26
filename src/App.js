import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import RouteComponents from './routes/modules';
import routesConfig from './routes/dictionary.json';

import Layout from './components/Layout';
import RouteFactory from './utils/routing/RouteFactory';
import './index.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <RouteFactory routes={RouteComponents} config={routesConfig} />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
