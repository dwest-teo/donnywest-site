import React from 'react';

const Footer = () => (
  <footer>
    <a className="email-link" href="mailto:hello@donnywest.com">hello@donnywest.com</a>
    <a
      href="https://www.linkedin.com/in/donnywest"
      title="LinkedIn"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg width="32" height="32" viewBox="0 0 16 16" style={{ fill: 'currentColor' }}>
        <path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" />
      </svg>
    </a>
    <a
      href="https://github.com/dwest-teo"
      title="Github"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg width="32" height="32" viewBox="0 0 32 32" style={{ fill: 'currentcolor' }}>
        <path d="M0 18 C0 12 3 10 3 9 C2.5 7 2.5 4 3 3 C6 3 9 5 10 6 C12 5 14 5 16 5 C18 5 20 5 22 6 C23 5 26 3 29 3 C29.5 4 29.5 7 29 9 C29 10 32 12 32 18 C32 25 30 30 16 30 C2 30 0 25 0 18 M3 20 C3 24 4 28 16 28 C28 28 29 24 29 20 C29 16 28 14 16 14 C4 14 3 16 3 20 M8 21 A1.5 2.5 0 0 0 13 21 A1.5 2.5 0 0 0 8 21 M24 21 A1.5 2.5 0 0 0 19 21 A1.5 2.5 0 0 0 24 21 z" />
      </svg>
    </a>
    <a
      href="https://twitter.com/donnyblaze1"
      title="Twitter"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg width="32" height="32" viewBox="0 0 32 32" style={{ fill: 'currentcolor' }}>
        <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4" />
      </svg>
    </a>
    <a
      href="https://stackoverflow.com/users/5535081/donny-west"
      title="Stack Overflow"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg width="32" height="32" viewBox="0 0 16 16" style={{ fill: 'currentcolor' }}>
        <path d="M12.658 14.577v-4.27h1.423V16H1.23v-5.693H2.65v4.27h10.006zm-8.583-1.423h7.16V11.73h-7.16v1.424zm.173-3.235l6.987 1.465.3-1.38L4.55 8.54l-.302 1.38zm.906-3.365l6.47 3.02.602-1.295-6.47-3.02-.602 1.295zm1.81-3.19l5.478 4.57.906-1.078-5.477-4.57-.905 1.077zM10.502 0L9.338.863l4.27 5.735 1.164-.862L10.5 0z" />
      </svg>
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

