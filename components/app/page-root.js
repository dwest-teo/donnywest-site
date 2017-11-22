import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { width, color, flexDirection } from 'styled-system';

const RootContainer = styled.div`
  ${width}
  ${color}
  ${flexDirection}
  min-height: 100vh;
  display: flex;
`;

const PageRoot = ({ children }) => (
  <RootContainer
    width={1}
    flexDirection="column"
    color="black"
    bg="offWhite"
  >
    {children}
  </RootContainer>
);

PageRoot.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageRoot;
