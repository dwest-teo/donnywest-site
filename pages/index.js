import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pageWrapper from '../components/hocs/page-wrapper';
import App from '../components/app';
import PageHead from '../components/app/page-head';
import simDb from '../components/sim-db';
import Heading from '../components/heading';
import Text from '../components/text';

class Home extends Component {
  static async getInitialProps() {
    const data = await simDb.home;
    return { ...data, isLoading: false };
  }

  render() {
    const { component, heading, text, beforeLink, afterLink, link, isLoading } = this.props;

    return (
      <App component={component}>
        <PageHead />
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
  component: PropTypes.string,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  beforeLink: PropTypes.string.isRequired,
  afterLink: PropTypes.string.isRequired,
  link: PropTypes.shape({
    href: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
  isLoading: PropTypes.bool,
};

Home.defaultProps = {
  component: 'home',
  isLoading: true,
};

export default pageWrapper(Home);
