import styled from 'styled-components';
import {
  color,
  space,
  width,
  fontWeight,
} from 'styled-system';

export const ListContainer = styled.ul`
  ${color}
  ${space}
  max-width: 34em;
  list-style-type: none;

  &:before,
  &:after {
    content: ' ';
    display: table;
    clear: both;
  }
`;

export const TitleItem = styled.li`
  ${space}
  display: block;
`;

export const ListTitle = styled.strong`
  ${color}
  ${fontWeight}
  font-size: 80%;
  text-transform: uppercase;
  letter-spacing: .1em;
`;

export const Item = styled.li`
  ${width}
  display: inline;
  float: left;
`;

export const ItemName = styled.small`
  font-size: 80%;
`;
