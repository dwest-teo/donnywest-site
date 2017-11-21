import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Anchor = props => (
  <Link
    href={props.href}
    prefetch={props.prefetch}
  >
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
          color: #357EDD;
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
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  prefetch: PropTypes.bool,
  active: PropTypes.bool,
};

Anchor.defaultProps = {
  active: false,
  prefetch: false,
};

export default Anchor;
