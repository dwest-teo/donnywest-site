import ReactGA from 'react-ga';

export function initAnalytics() {
  if (typeof window !== 'undefined') {
    ReactGA.initialize('UA-73652878-1');
  }
}

export function trackPageView() {
  if (typeof window !== 'undefined') {
    const page = window.location.pathname;
    ReactGA.set({ page });
    ReactGA.pageview(page);
  }
}
