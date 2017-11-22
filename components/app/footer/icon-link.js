import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../icons';
import { FooterLink } from './components';

const IconLink = ({ href, icon }) => (
  <FooterLink
    color="lightGray"
    mr={2}
    fontSize={2}
    fontWeight="bold"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon name={icon} />
  </FooterLink>
);

IconLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default IconLink;
