import React, { PropTypes } from 'react';
import Anchor from '../anchor';

const Header = props => {
  const { component } = props;

  return (
    <nav>
      <Anchor
        prefetch
        href="/"
        active={component === 'home'}
      >
        <span className="f-name">Donny</span><span className="l-name">West</span>
      </Anchor>
      <div className="links">
        <Anchor
          prefetch
          href="/about"
          nav
          active={component === 'about'}
        >
          About
        </Anchor>
        <Anchor
          prefetch
          href="/projects"
          nav
          active={component === 'projects'}
        >
          Projects
        </Anchor>
      </div>

      <style jsx>{`
        nav {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          width: 100%;
        }

        .f-name {
          color: #555;
          font-weight: bold;
        }

        .l-name {
          color: #777;
        }

        .links {
          flex: 1 1 auto;
          text-align: right;
        }

        @media (min-width: 30em) {
          nav {
            padding: 1rem 4rem;
          }
        }
      `}</style>
    </nav>
  );
};

Header.propTypes = {
  component: PropTypes.string,
};

export default Header;
