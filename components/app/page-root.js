import React, { PropTypes } from 'react';

const PageRoot = ({ children }) => (
  <div className="root">
    {children}
    <style jsx>{`
      .root {
        min-height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: #f4f4f4;
        color: #333;
      }
    `}</style>
  </div>
);

PageRoot.propTypes = {
  children: PropTypes.node,
};

export default PageRoot;
