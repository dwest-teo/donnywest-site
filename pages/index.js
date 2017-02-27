import React, { Component, PropTypes } from 'react';
import Head from 'next/head';
import App from '../components/app';
import simDb from '../components/sim-db';
import Heading from '../components/heading';
import Text from '../components/text';

class Home extends Component {
  static async getInitialProps() {
    const data = await simDb.home;
    return { ...data, isLoading: false };
  }

  render() {
    const { heading, text, beforeLink, afterLink, link, isLoading } = this.props;

    return (
      <App component="home">
        <Head>
          <title>Donny West | Front End Engineer, JavaScript Developer, Web Pro</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <main>
          <Heading>{heading}</Heading>
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            <div>
              <Text>{text}</Text>
              <Text>
                {beforeLink}
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  &nbsp;{link.text}&nbsp;
                </a>
                {afterLink}
              </Text>
            </div>
          )}
        </main>
      </App>
    );
  }
}

Home.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  beforeLink: PropTypes.string,
  afterLink: PropTypes.string,
  link: PropTypes.shape({
    href: PropTypes.string,
    text: PropTypes.string,
  }),
  isLoading: PropTypes.bool,
};

Home.defaultProps = {
  isLoading: true,
};

export default Home;
