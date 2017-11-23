import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'styled-system';

const Paragraph = styled.p`
  ${space}
  max-width: 30em;
  line-height: 1.5;
`;

const Text = ({ children }) => (
  <Paragraph
    my={1}
    mx={0}
  >
    {children}
  </Paragraph>
);

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;
