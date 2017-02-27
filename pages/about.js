import React, { Component, PropTypes } from 'react';
import Head from 'next/head';
import App from '../components/app';
import simDb from '../components/sim-db';
import Heading from '../components/heading';
import AboutSection from '../components/about/about-section';

class About extends Component {
  static async getInitialProps() {
    const data = await simDb.about;
    return { ...data, isLoading: false };
  }

  render() {
    const { component, heading, sections, isLoading } = this.props;

    return (
      <App component={component}>
        <Head>
          <title>About - Donny West | Front End Engineer, JavaScript Developer, Web Pro</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <main>
          <Heading page>{heading}</Heading>
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            <div>
              {sections.map((section, i) => (
                <AboutSection key={i} section={section} />
              ))}
            </div>
          )}
        </main>
      </App>
    );
  }
}

About.propTypes = {
  component: PropTypes.string,
  heading: PropTypes.string,
  sections: PropTypes.arrayOf(PropTypes.shape({
    heading: PropTypes.string,
  })),
  isLoading: PropTypes.bool,
};

About.defaultProps = {
  isLoading: true,
};

export default About;
