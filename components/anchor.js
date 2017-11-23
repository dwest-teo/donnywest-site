import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, space, fontSize } from 'styled-system';
import Link from 'next/link';

const AnchorTag = styled.a`
  ${color}
  ${space}
  ${fontSize}
  cursor: pointer;
`;

const ActiveContainer = styled.span`
  ${color}
`;

const Anchor = ({ href, prefetch, nav, active, children }) => (
  <Link
    href={href}
    prefetch={prefetch}
  >
    <AnchorTag
      color={nav ? 'black' : undefined}
      ml={nav ? [2, 3] : undefined}
      fontSize={nav ? [1, 2] : undefined}
    >
      <ActiveContainer color={active ? 'blue' : undefined}>
        {children}
      </ActiveContainer>
    </AnchorTag>
  </Link>
);

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  prefetch: PropTypes.bool,
  active: PropTypes.bool,
  nav: PropTypes.bool,
};

Anchor.defaultProps = {
  active: false,
  nav: false,
  prefetch: false,
};

export default Anchor;
