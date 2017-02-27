import React, { PropTypes } from 'react';
import ProjectTopper from './project-topper';
import ProjectTldr from './project-tldr';

const ProjectSection = ({ project }) => {
  const { heading, text, link, technologies, notable } = project;

  return (
    <article className={heading === 'ike.js' ? 'last' : null}>
      <ProjectTopper heading={heading} text={text} link={link} />
      <ProjectTldr title={technologies.title} list={technologies.list} />
      <ProjectTldr title={notable.title} list={notable.list} />

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
    technologies: PropTypes.shape({
      title: PropTypes.string,
      list: PropTypes.arrayOf(PropTypes.string),
    }),
    notable: PropTypes.shape({
      title: PropTypes.string,
      list: PropTypes.arrayOf(PropTypes.string),
    }),
  }),
};

export default ProjectSection;
