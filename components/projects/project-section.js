import React from 'react';
import PropTypes from 'prop-types';
import ProjectTopper from './project-topper';
import ProjectTldr from './project-tldr';

const ProjectSection = ({ project }) => {
  const { heading, text, link, technologies, notable } = project;

  return (
    <article className={heading === 'ike.js' ? 'last' : null}>
      <ProjectTopper heading={heading} text={text} link={link} />
      <ProjectTldr technologies={technologies} notable={notable} />

      <style jsx>{`
        article {
          padding: 2rem 1rem;
          border-color: rgba(0,0,0,.1);
          border-top-style: solid;
          border-top-width: 1px;
          border-bottom-style: solid;
          border-bottom-width: 1px;
        }

        .last {
          border-bottom: 0;
          padding-bottom: 0;
        }

        @media (min-width: 60em) {
          article {
            padding: 2rem 0;
          }
        }
      `}</style>
    </article>
  );
};

ProjectSection.propTypes = {
  project: PropTypes.shape({
    heading: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.shape({
      href: PropTypes.string,
    }),
    technologies: PropTypes.string,
    notable: PropTypes.string,
  }).isRequired,
};

export default ProjectSection;
