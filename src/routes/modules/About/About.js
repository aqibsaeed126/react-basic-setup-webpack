import React from 'react';

const About = () => {
  return (
    <div className="about-root">
      <h1>It's all about</h1>
      <h1 className="env">
        {ENV_PLATFORM} v {APP_VERSION}
      </h1>
    </div>
  );
};

export default About;
