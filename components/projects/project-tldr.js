import React from 'react';
import PropTypes from 'prop-types';

const ProjectTldr = ({ technologies, notable }) => (
  <dl>
    <dt>Technologies:</dt>
    <dd>{technologies}</dd>
    <dt>Notable:</dt>
    <dd>{notable}</dd>

    <style jsx>{`
      dl {
        font-size: .875rem;
        line-height: 1.25;
        padding-top: 1rem;
        margin: 0;
      }

      dt {
        text-transform: uppercase;
        font-weight: 700;
        color: #777;
        margin-top: 1rem;
      }

      dd {
        margin-left: 0;
      }
    `}</style>
  </dl>
);

ProjectTldr.propTypes = {
  technologies: PropTypes.string,
  notable: PropTypes.string,
};

export default ProjectTldr;
