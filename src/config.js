module.exports = {
  siteTitle: 'Łukasz Tomaszewski | Artificial Intelligence and Astrophysics Graduate | Data Scientist | AI Engineer | ML Engineer',
  siteDescription:
    'Lukasz Tomaszewski is a Artificial Intelligence and Astrophysics Graduate at the University of Kent, UK.',
  siteKeywords:
    'Lukasz Tomaszewski, mysftz, data scientist, ai engineer, ml engineer, web developer, python developer',
  siteUrl: 'https://mysftz.github.io/',
  siteLanguage: 'en_UK',
  googleAnalyticsID: 'G-JJBG91P2EL',
  googleVerification: 'q3Nu_ImkB6SquSPqU3x_kZFQOPUTvZNXjdROKCICIJE',
  name: 'Łukasz Tomaszewski',
  location: 'Sussex, UK',
  email: 'mysftzuk@gmail.com',
  github: 'https://github.com/mysftz',
  twitterHandle: '@mysftzuk',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/mysftz',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/mysftz',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/mysftzuk',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/lrgtomaszewski',
    },
    {
      name: 'Website',
      url: 'https://mysftz.github.io/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
