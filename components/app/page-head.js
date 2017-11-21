import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const PageHead = ({ pageTitle }) => {
  const defTitle = 'Donny West | Front End Engineer, JavaScript Developer, Web Pro';

  return (
    <Head>
      <title>{pageTitle ? `${pageTitle} - ${defTitle}` : defTitle}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#357EDD" />
      <link rel="manifest" href="/static/manifest.json" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
    </Head>
  );
};

PageHead.propTypes = {
  pageTitle: PropTypes.string,
};

PageHead.defaultProps = {
  pageTitle: null,
};

export default PageHead;
