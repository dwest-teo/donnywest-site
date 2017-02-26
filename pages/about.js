import React, { Component, PropTypes } from 'react';
import Head from 'next/head';
import simDb from '../components/sim-db';
import App from '../components/layouts/app';
import SubHeading from '../components/elements/sub-heading';

class About extends Component {
  static async getInitialProps() {
    const data = await new Promise(resolve => {
      setTimeout(resolve(simDb.about), 100);
    });

    return { ...data, isLoading: false };
  }

  render() {
    const { heading, sections, isLoading } = this.props;

    return (
      <App component="about">
        <Head>
          <title>About - Donny West | Front End Engineer, JavaScript Developer, Web Pro</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <section>
          <SubHeading>{heading}</SubHeading>
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            <div>
              {sections.map((section, i) => (
                <div key={i}>
                  <h3>{section.heading}</h3>
                  <p>{section.text}</p>
                  {section.list && (
                    <ul>
                      <li><small>{section.list.title}</small></li>
                      {section.list.items.map((item, n) => (
                        <li key={n}><small>{item}</small></li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      </App>
    );
  }
}

About.propTypes = {
  heading: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      text: PropTypes.string,
      list: PropTypes.shape({
        title: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.string),
      }),
    }),
  ),
  isLoading: PropTypes.bool,
};

About.defaultProps = {
  isLoading: true,
};

export default About;
