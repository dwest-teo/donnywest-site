import React, { PropTypes } from 'react';

const Heading = props => (
  <h1>
    {props.children}
    <style jsx>{`
      h1 {
        font-size: 2.25rem;
        letter-spacing: -.05em;
      }

      @media (max-width: 60em) and (min-width: 30em) {
        h1 {
          font-size: 3rem;
        }
      }

      @media (min-width: 60em) {
        h1 {
          font-size: 6rem;
        }
      }
    `}</style>
  </h1>
);

Heading.propTypes = {
  children: PropTypes.node,
};

export default Heading;
