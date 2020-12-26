import React from 'react';

const Home = () => {
  console.log('process.env', process.env);
  return (
    <div className="home-root">
      <h1>Home of</h1>
      <h1 className="env">
        {ENV_PLATFORM} v {APP_VERSION}
      </h1>
    </div>
  );
};

export default Home;
