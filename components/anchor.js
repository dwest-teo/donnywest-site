import React, { PropTypes } from 'react';
import Link from 'next/link';

const Anchor = props => (
  <Link {...props}>
    <a className={'nav' in props && 'nav'}>
      <span className={props.active && 'active'}>
        {props.children}
      </span>

      <style jsx>{`
        .nav {
          color: #333;
          margin-left: 1rem;
          font-size: .875rem;
        }

        .active {
          color: #00449E;
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
  active: PropTypes.bool,
};

export default Anchor;
