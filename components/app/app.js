import React, { PropTypes } from 'react';
import Header from './header';
import Footer from './footer';
import PageRoot from './page-root';
import PageContent from './page-content';

const App = ({ component, children }) => (
  <PageRoot>
    <Header component={component} />
    <PageContent>
      {children}
    </PageContent>
    <Footer />
    <style jsx global>{`
      html {
        box-sizing: border-box;
        font-family: -apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
        line-height: 1.15;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        margin: 0;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      a {
        text-decoration: none;
        background-color: transparent;
        color: #357EDD;
        opacity: 1;
        transition: opacity .15s ease-in;
      }

      a:hover,
      a:focus {
        opacity: .5;
      }

      a:active {
        opacity: .8;
      }

      a:focus {
        outline: 1px dotted currentColor;
      }

      img {
        max-width: 100%;
        border-style: none;
      }
    `}</style>
  </PageRoot>
);

App.propTypes = {
  children: PropTypes.node,
  component: PropTypes.string,
};

export default App;
