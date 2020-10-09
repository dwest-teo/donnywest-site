import React, { PropTypes } from 'react';

const PageContent = ({ children }) => (
  <div className="content">
    {children}

    <style jsx>{`
      .content {
        background-color: hsla(0,0%,100%,.9);
        flex: 1 1 auto;
        min-width: 0;
        min-height: 0;
        padding: 1rem;
      }

      @media (min-width: 30em) {
        .content {
          padding: 4rem;
        }
      }
    `}</style>
  </div>
);

PageContent.propTypes = {
  children: PropTypes.node,
};

export default PageContent;
