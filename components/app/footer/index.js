import React from 'react';
import IconLink from './icon-link';
import { FooterContainer, EmailLink, CopyrightText } from './components';

const Footer = () => (
  <FooterContainer
    p={[2, 4]}
    py={[2, 3]}
    color="black"
    borderColor="darkBorder"
  >
    <EmailLink
      color="lightGray"
      mr={2}
      mb={2}
      fontSize={4}
      fontWeight="bold"
      href="mailto:donny@most.toys"
    >
      hello@donnywest.com
    </EmailLink>
    <IconLink href="https://www.linkedin.com/in/donnywest" icon="linkedin" />
    <IconLink href="https://github.com/dwest-teo" icon="github" />
    <IconLink href="https://twitter.com/donnyblaze1" icon="twitter" />
    <IconLink href="https://plus.google.com/+DonnyWest" icon="googleplus" />
    <IconLink href="https://stackoverflow.com/users/5535081/donny-west" icon="stackoverflow" />
    <CopyrightText
      fontSize={1}
      fontWeight="bold"
      mb={0}
    >
      &copy; {new Date().getFullYear()} Donny West
    </CopyrightText>
  </FooterContainer>
);

export default Footer;
