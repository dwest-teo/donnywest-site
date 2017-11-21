import React from 'react';
import PropTypes from 'prop-types';
import SubHeading from '../sub-heading';
import Text from '../text';

const ProjectTopper = ({ heading, text, link }) => (
  <div className="container">
    <div className="intro">
      <SubHeading>{heading}</SubHeading>
      <Text>{text}</Text>
    </div>
    <a
      className="img-link"
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={link.img}
        sizes="(max-width: 30em) 100vw, 50vw"
        srcSet={`${link.img} 400w, ${link.imgLg} 800w`}
        alt={`Screenshot of ${heading}`}
      />
    </a>
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
      }

      .intro {
        width: 100%;
        order: 2;
      }

      .img-link {
        width: 100%;
        text-align: center;
        margin-bottom: 2rem;
        order: 1;
        backface-visibility: hidden;
        transform: translateZ(0);
        transition: transform .25s ease-out;
      }

      .img-link:hover {
        transform: scale(1.05);
        opacity: 1;
      }

      @media (min-width: 48em) {
        .container {
          flex-direction: row;
        }

        .intro {
          width: 60%;
          padding-right: 1rem;
          order: 1;
        }

        .img-link {
          width: 40%;
          margin-bottom: 0;
          order: 2;
        }
      }
    `}</style>
  </div>
);

ProjectTopper.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.shape({
    href: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};

export default ProjectTopper;
