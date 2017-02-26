import React, { PropTypes } from 'react';

const SectionHeading = props => (
  <h3>
    {props.children}
    <style jsx>{`
      h3 {
        font-size: 1.25rem;
        font-weight: 400;
        max-width: 20em;
        line-height: 1.5;
      }

      @media (min-width: 30em) {
        h3 {
          font-size: 1.5rem;
        }
      }
    `}</style>
  </h3>
);

SectionHeading.propTypes = {
  children: PropTypes.node,
};

export default SectionHeading;
