import React, { PropTypes } from 'react';

const ProjectTldr = ({ title, list }) => (
  <ul>
    <li><strong>{title}</strong></li>
    {list.map((item, i) => (
      <li key={i}>{item}</li>
    ))}

    <style jsx>{`
      ul {
        font-size: .875rem;
        color: #777;
      }

      li {
        display: inline-block;
      }

      strong {
        text-transform: uppercase;
        font-weight: 700;
      }
    `}</style>
  </ul>
);

ProjectTldr.propTypes = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectTldr;
