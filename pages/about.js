import React, { Component } from 'react';
import PropTypes from 'prop-types';
import App from '../components/app';
import PageHead from '../components/app/page-head';
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
        <PageHead pageTitle={heading} />
        <main>
          <Heading page>{heading}</Heading>
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            <div>
              {sections.map(section => (
                <AboutSection key={section.key} section={section} />
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
  heading: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
    })
  ).isRequired,
  isLoading: PropTypes.bool,
};

About.defaultProps = {
  component: 'about',
  isLoading: true,
};

export default About;
