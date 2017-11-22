import styled from 'styled-components';
import { color, space, borderColor, fontWeight, fontSize } from 'styled-system';

export const FooterLink = styled.a`
  ${color}
  ${space}
  ${fontWeight}
  ${fontSize}
  line-height: 1;
  display: inline-block;
`;

export const FooterContainer = styled.footer`
  ${color}
  ${space}
  ${borderColor}
`;

export const EmailLink = styled(FooterLink)`
  ${color}
  display: block;
`;

export const CopyrightText = styled.p`
  ${space}
  ${fontWeight}
  ${fontSize}
  line-height: 1;
  text-transform: uppercase;
`;
