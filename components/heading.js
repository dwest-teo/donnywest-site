import React, { PropTypes } from 'react';

const Heading = props => (
  <h1 className={'page' in props && 'page'}>
    {props.children}
    <style jsx>{`
      h1 {
        font-size: 2.25rem;
        font-weight: 700;
        letter-spacing: -.05em;
      }

      .page {
        line-height: 1.25;
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

        .page {
          font-size: 3rem;
        }
      }
    `}</style>
  </h1>
);

Heading.propTypes = {
  children: PropTypes.node,
};

export default Heading;
