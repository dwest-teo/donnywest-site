import React from 'react';
import PropTypes from 'prop-types';
import {
  ListContainer,
  TitleItem,
  ListTitle,
  Item,
  ItemName,
} from './components';

const SkillList = ({ list }) => (
  <ListContainer
    p={0}
    mt={3}
    mb={48}
    color="darkGray"
  >
    <TitleItem
      my={1}
      mx={0}
    >
      <ListTitle
        color="extraLightGray"
        fontWeight="bold"
      >
        {list.title}
      </ListTitle>
    </TitleItem>
    {list.items.map(item => (
      <Item
        key={item.replace(/\s/g, '')}
        width={[1, 1 / 2]}
      >
        <ItemName>
          {item}
        </ItemName>
      </Item>
    ))}
  </ListContainer>
);

SkillList.propTypes = {
  list: PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default SkillList;
