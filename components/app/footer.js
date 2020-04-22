import React from 'react';
import Icon from '../icons/';

const Footer = () => (
  <footer>
    <a
      href="https://twitter.com/donnyblaze1"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name="twitter" />
    </a>
    <a
      href="https://www.linkedin.com/in/donnywest"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name="linkedin" />
    </a>
    <a
      href="https://github.com/dwest-teo"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name="github" />
    </a>
    <a
      href="https://stackoverflow.com/users/5535081/donny-west"
      title="Stack Overflow"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name="stackoverflow" />
    </a>
    <p>&copy; {new Date().getFullYear()} Donny West</p>

    <style jsx>{`
      footer {
        padding: 1rem;
        color: rgba(0,0,0,.7);
        border-color: rgba(0,0,0,.1);
      }

      a {
        color: #777;
        line-height: 1;
        display: inline-block;
        margin-right: 1rem;
        font-size: 1.5rem;
        font-weight: 700;
      }

      .email-link {
        display: block;
        margin-bottom: 1rem;
      }

      p {
        font-size: .875rem;
        text-transform: uppercase;
        margin-bottom: 0;
        line-height: 1;
        font-weight: 700;
      }

      @media (min-width: 30em) {
        footer {
          padding-left: 4rem;
          padding-right: 4rem;
          padding-top: 2rem;
          padding-bottom: 2rem;
        }
      }
    `}</style>
  </footer>
);

export default Footer;

