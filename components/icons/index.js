import React, { PropTypes } from 'react';
import svgPaths from './svg-paths';

const Icon = ({ name, size = 32, fill = 'currentcolor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width={size}
    height={size}
    fill={fill}
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="1.414"
    {...props}
  >
    <path fillRule="nonzero" d={svgPaths[name]} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  fill: PropTypes.string,
};

export default Icon;
