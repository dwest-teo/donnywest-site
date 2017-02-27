import React, { Component, PropTypes } from 'react';
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
