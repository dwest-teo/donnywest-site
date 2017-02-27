import React, { PropTypes } from 'react';
import Head from 'next/head';
import App from '../components/app';
import Heading from '../components/heading';
import Text from '../components/text';

const data = {
  heading: 'I\'m Donny West.',
  text: 'I\'m a full-stack developer focused on building modern, performant, modular applications for the web and mobile.  I create solutions that solve problems for organizations and improve experiences for users.  Every day I try to leave the web a little faster, friendlier, and better than the way I found it.',
  beforeLink: 'Currently, I\'m the lead front-end engineer at',
  afterLink: 'based in Gainesville, FL.',
  link: {
    href: 'https://www.theelegantoffice.com',
    text: 'The Elegant Office,',
  },
};

const Home = ({ data }) => {
  const { heading, text, beforeLink, afterLink, link } = data;

  return (
    <App component="home">
      <Head>
        <title>Donny West | Front End Engineer, JavaScript Developer, Web Pro</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <article>
        <Heading>{heading}</Heading>
        <Text>{text}</Text>
        <Text>
          {beforeLink}
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            &nbsp;{link.text}&nbsp;
          </a>
          {afterLink}
        </Text>
      </article>
    </App>
  );
};

Home.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string,
    p1: PropTypes.string,
    beforeLink: PropTypes.string,
    afterLink: PropTypes.string,
    link: PropTypes.shape({
      href: PropTypes.string,
      text: PropTypes.string,
    }),
  }),
};

Home.defaultProps = { data };

export default Home;
