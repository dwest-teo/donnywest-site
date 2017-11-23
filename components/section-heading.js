import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, space, fontSize, fontWeight } from 'styled-system';

const H2 = styled.h2`
  ${color}
  ${space}
  ${fontSize}
  ${fontWeight}
  max-width: 20em;
  line-height: 1.5;
`;

const SectionHeading = ({ children }) => (
  <H2
    color="darkGray"
    fontSize={[3, 4]}
    fontWeight="bold"
    my={2}
    mx={0}
  >
    {children}
  </H2>
);

SectionHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionHeading;
