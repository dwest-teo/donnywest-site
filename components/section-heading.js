import React from 'react';
import PropTypes from 'prop-types';

const SectionHeading = props => (
  <h3>
    {props.children}
    <style jsx>{`
      h3 {
        font-size: 1.25rem;
        font-weight: 700;
        color: #555;
        max-width: 20em;
        line-height: 1.5;
        margin: 1.5rem 0;
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
  children: PropTypes.node.isRequired,
};

export default SectionHeading;
