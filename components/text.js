import React from 'react';
import PropTypes from 'prop-types';

const Text = props => (
  <p>
    {props.children}
    <style jsx>{`
      p {
        max-width: 30em;
        line-height: 1.5;
        margin: 1rem 0;
      }
    `}</style>
  </p>
);

Text.propTypes = {
  children: PropTypes.node,
};

export default Text;
