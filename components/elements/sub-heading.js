import React, { PropTypes } from 'react';

const SubHeading = props => (
  <h2>
    {props.children}
    <style jsx>{`
      h2 {
        font-size: 2.25rem;
        letter-spacing: -.05em;
        line-height: 1.25;
      }

      @media (min-width: 30em) {
        h2 {
          font-size: 3rem;
        }
      }
    `}</style>
  </h2>
);

SubHeading.propTypes = {
  children: PropTypes.node,
};

export default SubHeading;
