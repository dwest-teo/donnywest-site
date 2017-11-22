import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, space, flex } from 'styled-system';

const ContentContainer = styled.div`
  ${color}
  ${space}
  ${flex}
  min-width: 0;
  min-height: 0;
`;

const PageContent = ({ children }) => (
  <ContentContainer
    p={[2, 4]}
    bg="white"
    flex="1 1 auto"
  >
    {children}
  </ContentContainer>
);

PageContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContent;
