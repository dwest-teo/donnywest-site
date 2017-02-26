import React, { PropTypes } from 'react';
import SectionHeading from '../section-heading';
import Text from '../text';
import SkillList from './skill-list';

const AboutSection = ({ section }) => {
  const { heading, text, list } = section;

  return (
    <div>
      <SectionHeading>{heading}</SectionHeading>
      <Text>{text}</Text>
      {list && (
        <SkillList list={list} />
      )}
    </div>
  );
};

AboutSection.propTypes = {
  section: PropTypes.shape({
    heading: PropTypes.string,
    text: PropTypes.string,
    list: PropTypes.shape({
      title: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.string),
    }),
  }),
};

export default AboutSection;
