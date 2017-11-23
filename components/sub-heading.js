import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, fontSize, fontWeight } from 'styled-system';

const H2 = styled.h2`
  ${space}
  ${fontSize}
  ${fontWeight}
  line-height: 1.25;
`;

const SubHeading = ({ children }) => (
  <H2
    mt={0}
    fontSize={4}
    fontWeight="bold"
  >
    {children}
  </H2>
);

SubHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubHeading;
