import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontSize, fontWeight } from 'styled-system';

const H1 = styled.h1`
  ${fontSize}
  ${fontWeight}
  letter-spacing: -.05em;
  line-height: ${props => props.page ? 1.25 : 1.15}
`;

const Heading = ({ page, children }) => (
  <H1
    page={page}
    fontWeight="bold"
    fontSize={page ? [5, 6] : [5, 6, 96]}
  >
    {children}
  </H1>
);

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.bool,
};

Heading.defaultProps = {
  page: false,
};

export default Heading;
