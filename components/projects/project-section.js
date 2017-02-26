import React, { PropTypes } from 'react';
import Text from '../text';
import ProjectTopper from './project-topper';

const ProjectSection = ({ project }) => {
  const { heading, text, link, technologies, notable } = project;

  return (
    <article>
      <ProjectTopper heading={heading} text={text} link={link} />
      <p className="tldr">
        <strong>Technologies: </strong>
        {technologies}
      </p>
      <p className="tldr last">
        <strong>Notable: </strong>
        {notable}
      </p>
      <style jsx>{`
        article {
          padding: 2rem 1rem;
          border-color: rgba(0,0,0,.1);
          border-top-style: solid;
          border-top-width: 1px;
          border-bottom-style: solid;
          border-bottom-width: 1px;
        }

        .tldr {
          font-size: .875rem;
          color: #777;
        }

        .last {
          margin-bottom: 0;
        }

        strong {
          text-transform: uppercase;
          font-weight: 700;
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
  }),
};

export default ProjectSection;
