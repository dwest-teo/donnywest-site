import React from 'react';
import PropTypes from 'prop-types';
import Anchor from '../../anchor';
import { NavContainer, Name, LinkContainer } from './components';

const Header = ({ component }) => (
  <NavContainer
    flexDirection="row"
    wrap="nowrap"
    justify="space-between"
    align="center"
    py={2}
    px={[2, 4]}
    width={1}
  >
    <Anchor
      prefetch
      route="index"
      active={component === 'home'}
    >
      <Name color="darkGray" fontWeight="bold">
        Donny
      </Name>
      <Name color="lightGray">
        West
      </Name>
    </Anchor>
    <LinkContainer flex="1 1 auto" align="right">
      <Anchor
        prefetch
        route="about"
        nav
        active={component === 'about'}
      >
        About
      </Anchor>
      <Anchor
        prefetch
        route="projects"
        nav
        active={component === 'projects'}
      >
        Projects
      </Anchor>
    </LinkContainer>
  </NavContainer>
);

Header.propTypes = {
  component: PropTypes.string,
};

Header.defaultProps = {
  component: 'home',
};

export default Header;
