import React from 'react';
import PropTypes from 'prop-types';

const SubHeading = props => (
  <h2>
    {props.children}
    <style jsx>{`
      h2 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-top: 0;
        line-height: 1.25;
      }
    `}</style>
  </h2>
);

SubHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubHeading;
