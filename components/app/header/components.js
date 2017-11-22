import styled from 'styled-components';
import {
  color,
  space,
  width,
  fontWeight,
  flex,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  textAlign,
} from 'styled-system';

export const NavContainer = styled.nav`
  ${color}
  ${space}
  ${width}
  ${flexDirection}
  ${flexWrap}
  ${justifyContent}
  ${alignItems}
  display: flex;
`;

export const Name = styled.span`
  ${color}
  ${fontWeight}
`;

export const LinkContainer = styled.div`
  ${flex}
  ${textAlign}
`;
