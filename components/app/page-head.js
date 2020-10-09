import React, { PropTypes } from 'react';
import Head from 'next/head';

const PageHead = ({ pageTitle }) => {
  const defTitle = 'Donny West | Front End Engineer, JavaScript Developer, Web Pro';

  return (
    <Head>
      <title>{pageTitle ? `${pageTitle} - ${defTitle}` : defTitle}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
    </Head>
  );
};

PageHead.propTypes = {
  pageTitle: PropTypes.string,
};

export default PageHead;
