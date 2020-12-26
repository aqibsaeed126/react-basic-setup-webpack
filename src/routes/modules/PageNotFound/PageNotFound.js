import React from 'react';
import { useHistory } from 'react-router-dom';

const PageNotFound = () => {
  const history = useHistory();
  return (
    <div className="page-root">
      <div className="background-overlay">
        <h1 className="ff-rubik enormous-404">404</h1>
      </div>
      <div className="not-found-content ">
        <h2 className="ff-rubik oops-title">PAGE NOT FOUND!</h2>
        <p className="ff-rubik oops-description">
          The page either does not exist or is unaccessible.
        </p>
        <div className="action-container">
          <button type="button" className="theme-btn" onClick={() => history.push('/')}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
