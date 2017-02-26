import React, { Component, PropTypes } from 'react';
import Head from 'next/head';
import simDb from '../components/sim-db';
import App from '../components/layouts/app';
import SubHeading from '../components/elements/sub-heading';

class Projects extends Component {
  static async getInitialProps() {
    const data = await new Promise(resolve => {
      setTimeout(resolve(simDb.projects), 100);
    });

    return { ...data, isLoading: false };
  }

  render() {
    const { heading, projects, moreToCome, isLoading } = this.props;

    return (
      <App component="projects">
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
              {projects.map((project, i) => (
                <article key={i}>
                  <div>
                    <div>
                      <h1>{project.title}</h1>
                      <p>{project.p}</p>
                    </div>
                    <a
                      href={project.link.href}
                      title={project.link.title}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={project.link.img}
                        sizes="(max-width: 30em) 100vw, 50vw"
                        srcSet={`${project.link.img} 400w, ${project.link.imgLg} 800w`}
                        alt={`Screenshot of ${project.link.title}`}
                      />
                    </a>
                  </div>
                  <p>
                    <span>Technologies: </span>
                    {project.technologies}
                  </p>
                  <p>
                    <span>Notable: </span>
                    {project.notable}
                  </p>
                </article>
              ))}
              {moreToCome && (
                <h3>More to come...</h3>
              )}
            </div>
          )}
        </section>
      </App>
    );
  }
}

Projects.propTypes = {
  heading: PropTypes.string,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      p: PropTypes.string,
      link: PropTypes.shape({
        href: PropTypes.string,
        title: PropTypes.string,
        img: PropTypes.string,
      }),
      technologies: PropTypes.string,
      notable: PropTypes.string,
    }),
  ),
  moreToCome: PropTypes.bool,
  isLoading: PropTypes.bool,
};

Projects.defaultProps = {
  isLoading: true,
};

export default Projects;
