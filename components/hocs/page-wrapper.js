import React, { Component } from 'react';

const pageWrapper = Page => class extends Component {
  static getInitialProps(ctx) {
    if (Page.getInitialProps) {
      return Page.getInitialProps(ctx);
    }

    return null;
  }

  componentDidMount() {
    const isProd = process.env.NODE_ENV === 'production';
    const supportsSw = 'serviceWorker' in navigator;
    let isInstalling = false;

    if (isProd && supportsSw && !isInstalling) {
      isInstalling = true;
      navigator.serviceWorker.register('/sw.js').then(reg => {
        if (reg.installing) {
          console.log('Installing new ServiceWorker');
        }

        if (reg.active) {
          console.log('ServiceWoker activated with scope: ', reg.scope);
        }
      })
      .catch(err => {
        console.error('ServiceWorker registration failed', err.message);
      });
    }

    if (!isProd && supportsSw) {
      navigator.serviceWorker.ready.then(reg => reg.unregister());
      console.log('Unregistered ServiceWorker for development');
    }
  }

  render() {
    return (
      <Page {...this.props} />
    );
  }
};

export default pageWrapper;
