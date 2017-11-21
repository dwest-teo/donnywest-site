import React, { Component } from 'react';
import PropTypes from 'prop-types';
import App from '../components/app';
import PageHead from '../components/app/page-head';
import simDb from '../components/sim-db';
import Heading from '../components/heading';
import ProjectSection from '../components/projects/project-section';

class Projects extends Component {
  static async getInitialProps() {
    const data = await simDb.projects;
    return { ...data, isLoading: false };
  }

  render() {
    const { component, heading, projects, isLoading } = this.props;

    return (
      <App component={component}>
        <PageHead pageTitle={heading} />
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
  component: PropTypes.string,
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
