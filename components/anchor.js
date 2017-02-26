import React, { PropTypes } from 'react';
import Link from 'next/link';

const Anchor = props => (
  <Link {...props}>
    <a className={'nav' in props && 'nav'}>
      {props.children}
      <style jsx>{`
        .nav {
          color: #333;
          margin-left: 1rem;
          font-size: .875rem;
        }

        @media (min-width: 30em) {
          .nav {
            margin-left: 2rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </a>
  </Link>
);

Anchor.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Anchor;
