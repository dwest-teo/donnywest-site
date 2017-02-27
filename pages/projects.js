import React, { Component, PropTypes } from 'react';
import Head from 'next/head';
import App from '../components/app';
import simDb from '../components/sim-db';
import Heading from '../components/heading';
import ProjectSection from '../components/projects/project-section';

class Projects extends Component {
  static async getInitialProps() {
    const data = await simDb.projects;
    return { ...data, isLoading: false };
  }

  render() {
    const { heading, projects, isLoading } = this.props;

    return (
      <App component="projects">
        <Head>
          <title>Projects - Donny West | Front End Engineer, JavaScript Developer, Web Pro</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <main>
          <Heading page>{heading}</Heading>
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            <div>
              {projects.map((project, i) => (
                <ProjectSection key={i} project={project} />
              ))}
            </div>
          )}
        </main>
      </App>
    );
  }
}

Projects.propTypes = {
  heading: PropTypes.string,
  projects: PropTypes.arrayOf(PropTypes.shape({
    heading: PropTypes.string,
  })),
  isLoading: PropTypes.bool,
};

Projects.defaultProps = {
  isLoading: true,
};

export default Projects;
