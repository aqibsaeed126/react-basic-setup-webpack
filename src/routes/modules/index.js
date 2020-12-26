import React from 'react';

const components = ['Root', 'PageNotFound', 'Home', 'About'];
const Components = {};
components.forEach(item => {
  Components[item] = React.lazy(() => import(`./${item}`));
});

export default Components;
