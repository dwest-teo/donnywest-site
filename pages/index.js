import React, { PropTypes } from 'react';
import Head from 'next/head';
import App from '../components/layouts/app';
import Heading from '../components/elements/heading';

const data = {
  heading: 'I\'m Donny West.',
  p1: 'I\'m a full-stack developer focused on building modern, lightweight, modular systems for the web and mobile.  I create solutions that solve problems for organizations and improve experiences for users.  Every day I try to leave the web a little faster, friendlier, and better than the way I found it.',
  beforeLink: 'Currently, I\'m the lead front-end engineer at',
  afterLink: 'based in Gainesville, FL.',
  link: {
    href: 'https://www.theelegantoffice.com',
    title: 'TheElegantOffice.com',
    text: 'The Elegant Office,',
  },
};

const Home = ({ home }) => (
  <App component="home">
    <Head>
      <title>Donny West | Front End Engineer, JavaScript Developer, Web Pro</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <article>
      <Heading>{home.heading}</Heading>
      <p>{home.p1}</p>
      <p>
        {home.beforeLink}
        <a href={home.link.href} target="_blank" rel="noopener noreferrer">
          &nbsp;{home.link.text}&nbsp;
        </a>
        {home.afterLink}
      </p>
    </article>
    <style jsx>{`
      p {
        max-width: 30em;
        line-height: 1.5;
      }
    `}</style>
  </App>
);

Home.propTypes = {
  home: PropTypes.shape({
    heading: PropTypes.string,
    p1: PropTypes.string,
    beforeLink: PropTypes.string,
    afterLink: PropTypes.string,
    link: PropTypes.shape({
      href: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  }),
};

Home.defaultProps = { home: data };

export default Home;
