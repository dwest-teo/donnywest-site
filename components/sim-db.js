const simDb = {
  about: {
    component: 'ABOUT',
    heading: 'About Me',
    sections: [
      {
        heading: 'I develop real-world web applications with a strong focus on performance & usability on any device.',
        text: 'Working with modern languages and technology stacks, I build applications that solve real-world problems for organizations and users.  I have significant experience in e-commerce, from customer-facing front-ends to integration systems with vendors and providers.  I enjoy building modular, scalable solutions that exceed expectations and shatter goals.',
        list: {
          title: 'Skills',
          items: [
            'JavaScript (ES6+)',
            'Node.js',
            'Ruby on Rails',
            'CSS/SASS/PostCSS',
            'Go',
            'UNIX/Linux/OSX',
          ],
        },
      },
      {
        heading: 'I\'m opinionated about doing things properly, but flexible about the tools I use.',
        text: 'I believe the first step to completing a project properly is to choose the right tools for the job.  I have a set of languages and frameworks that I love to use, but I\'m a firm believer in being flexible enough to try new and emergent technologies when they are a better fit for the task at hand.',
        list: {
          title: 'Tools',
          items: [
            'React',
            'Webpack + Babel',
            'Redux/Flux',
            'Gulp',
            'CSS Modules',
            'Hapi.js',
          ],
        },
      },
      {
        heading: 'Before becoming a developer, I spent 6 years in management roles for e-commerce merchants and providers.',
        text: 'My management experience has given me some unique perspectives as a developer.  I believe that great applications are born out of a clear vision and focus, long before the first line of code is written.  Solutions need to be impeccably tailored to fit the problem, and they always start with a deep, big-picture understanding of the project at-hand.',
        list: {
          title: 'Platforms',
          items: [
            'Bigcommerce',
            'Google Cloud',
            'Algolia',
            'AWS',
            'imgix',
            'Heroku',
          ],
        },
      },
      {
        heading: 'I\'m also a father of two that used to have all kinds of cool interests and hobbies.',
        text: 'Now most of my time is spent singing the ABC song, reading books about animals, or playing with Thomas, Gordon, and Henry in an elaborate recreation of the island of Sodor.  Also diapers.  This might not sound especially exciting, but I wouldn\'t have it any other way!',
        list: null,
      },
    ],
  },
  projects: {
    component: 'PROJECTS',
    heading: 'Projects',
    projects: [
      {
        heading: 'The Elegant Office',
        text: 'My day job - a complete custom e-commerce application and ecosystem.  The Elegant Office uses a custom React/Redux front-end application, with a smart API surface that decouples the backend, making it platform-agnostic.  The site currently runs on the Bigcommerce platform, and features a number of notable "firsts" and unique integrations.',
        link: {
          href: 'https://www.theelegantoffice.com/',
          img: '/static/images/teo-ss.jpg',
          imgLg: '/static/images/teo-ss-lg.jpg',
        },
        technologies: 'React, Redux, Redux-Saga, Node.js, Webpack, Google Cloud, Ruby, Go, SASS',
        notable: 'First Bigcommerce store using a React SPA, custom integrations with Algolia, Yotpo, Netsuite, imgix, ZMags, and more',
      },
      {
        heading: 'Donny West',
        text: 'The site you\'re browsing at this very moment.  It\'s a simple enough site, but there\'s a modern tech stack behind it working to make it fast, responsive, and readable.  A custom Go server and React + Redux front-end application make this site vastly more complex than it needs to be, but it\'s all in good fun.',
        link: {
          href: '/',
          img: '/static/images/dw-ss.jpg',
          imgLg: '/static/images/dw-ss-lg.jpg',
        },
        technologies: 'React, Redux, Node.js, JavaScript(ES6), Webpack, Go, PostCSS, CSS Modules',
        notable: 'The only officially authorized Donny West website in the world',
      },
      {
        heading: 'Brink Commerce',
        text: 'A simple static site/landing page.  This site was built from the ground-up for performance, using vanilla JavaScript and SASS only, no frameworks.  It\'s basic and minimal, and exceeded all performance goals.',
        link: {
          href: 'https://brinkcommerce.com/',
          img: '/static/images/brink-ss.jpg',
          imgLg: '/static/images/brink-ss-lg.jpg',
        },
        technologies: 'JavaScript(ES6), SASS, Gulp, Rollup, Python',
        notable: 'It\'s really, really fast',
      },
      {
        heading: 'slim-stencil-tools',
        text: 'A lightweight and modern alternative utility library for the Bigcommerce Stencil theme framework.  This is a lean, performance-oriented replacement for Bigcommerce\'s standard library that removes third-party dependencies like jQuery.',
        link: {
          href: 'https://github.com/dwest-teo/slim-stencil-tools',
          img: '/static/images/sst-ss.jpg',
          imgLg: '/static/images/sst-ss-lg.jpg',
        },
        technologies: 'JavaScript(ES6), Gulp, Webpack',
        notable: 'Less than 1/3 the size of the original library it replaces',
      },
      {
        heading: 'ike.js',
        text: 'A small, dependency-free JavaScript library that asynchronously loads SVG sprites and saves them to the client\'s local storage.',
        link: {
          href: 'https://github.com/dwest-teo/ike.js',
          img: '/static/images/ike-ss.jpg',
          imgLg: '/static/images/ike-ss-lg.jpg',
        },
        technologies: 'JavaScript(ES6), Gulp',
        notable: 'A simple utility that does one thing well',
      },
    ],
  },
};

export default simDb;
