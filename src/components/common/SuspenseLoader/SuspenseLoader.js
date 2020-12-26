/* eslint-disable max-len */
import React from 'react';

const SuspenseLoader = () => {
  return (
    <section className="d-flex justify-content-center align-items-center loader-sec">
      <svg className="simple-loader" fillOpacity={0} viewBox="-100 0 400 350">
        <path
          fill="#fff"
          stroke="#551496"
          d="M260.026,0H144.5L0,173.593,144.5,347.185H260.026l-144.5-173.593Z"
        />
      </svg>
    </section>
  );
};

export default SuspenseLoader;
