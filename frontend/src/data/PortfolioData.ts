import type { PortfolioItem } from '@/types/portfolioTypes'

const portfolioData: PortfolioItem[] = [
  {
    title: 'Hilo',
    desc: 'This project was built to encompass all my knowledge of frontend and backend to create a full-stack application. It is a simple game with a login and account system, custom assets for the frontend, a backend that handles some computation and a database to store player data.',
    imgSrc: 'assets/pictures/HiloLogo.png',
    imgSrcDark: 'assets/pictures/HiloLogo.png',
    alt: 'Hilo game logo',
    stack: ['Python', 'Typescript', 'Vue', 'SQLAlchemy', 'Postgresql'],
    github: 'https://github.com/Bobotato/game-hilo',
    features: [
      '• Production-ready game app with user authentication, persistent game scores, and custom audio and graphics, deployed with SSL protection',
      '• Ensured continued function of backend processes during development by implementing unit and integration testing using Pytest',
      '• Developed CICD pipeline to automate code quality checking and test coverage using pre-commit hooks, Github Actions and CodeCov',
      '• Automated Docker image updating, cloud provisioning and app deployment to an AWS EC2 instance using Docker'
    ]
  },
  {
    title: 'SpendSplit',
    desc: 'This project was built using Next.JS, React and MaterialUI to expand my knowledge to the MERN ecosystem. It is a full-stack web application with a login and registration system, and a dashboard that allows users to track and split their group expenses.',
    imgSrc: 'assets/pictures/SpendSplitLogo.png',
    imgSrcDark: 'assets/pictures/SpendSplitLogo.png',
    alt: 'SpendSplit app logo',
    stack: ['React', 'Next.js', 'Typescript', 'MaterialUI'],
    github: 'https://github.com/Bobotato/spendsplit',
    features: [
      '• Live webapp built with React and NextJS to help people track and split their group spending',
      '• Automated end to end testing CI using Github Actions and Cypress'
    ]
  },
  {
    title: 'Overlord',
    desc: 'This full-stack project was built to learn how to use AI and prompt engineering to offload some daily management and planning tasks, improving my efficiency. It uses the ChatGPT-3.5-Turbo API to filter and prioritise my daily tasks by relevance and importance towards a predefined monthly goal.',
    imgSrc: 'assets/pictures/OverlordLogo.png',
    imgSrcDark: 'assets/pictures/OverlordLogoDark.png',
    alt: 'Overlord app logo',
    stack: ['Tailwind', 'Vue', 'Python', 'OpenAI', 'Typescript'],
    github: 'https://github.com/Bobotato/overlord-be',
    features: [
      '• Production-ready GPT3.5-Turbo powered productivity application to help users reduce and prioritse tasks',
      '• Built an OpenAPI Specification (OAS) compliant API using FastAPI to make asynchronous calls to OpenAI',
      '• Built system to dynamically engineer and build prompts to return responses in consistent JSON formats suitable for parsing',
      '• Ensured API response integrity using Zod schemas'
    ]
  },
  {
    title: 'Portfolio Website',
    desc: 'This very website was built as a way of testing myself to produce a polished, responsive and user-friendly website with an inclusion of an unfamiliar niche framework (ThreeJS). I also used the opportunity to create a CICD pipeline that would automate the update of the remote host, so that I would only have to worry about building the website content.',
    imgSrc: 'assets/pictures/PortfolioLogo.png',
    imgSrcDark: 'assets/pictures/PortfolioLogoDark.png',
    alt: 'Portfolio website logo',
    stack: ['Tailwind', 'Vue', 'ThreeJS', 'Typescript'],
    github: 'https://github.com/Bobotato/portfolio-website',
    features: [
      '• Live portfolio website with animated interactive 2D & 3D elements created with ThreeJS, Adobe CC, Tailwind and CSS',
      '• Implemented stateful, toggleable dark mode and corresponding theme-responsive elements for a high quality UX',
      '• Automated Docker image updating, cloud provisioning and app deployment to a DigitalOcean droplet using Docker, Terraform, Ansible, Github Actions and DigitalOcean',
      '• Utilised Google Lighthouse to optimise websites to near-perfect scores for performance, accessibilty and SEO',
      '• Ensured continued website functionality and component functionality using Cypress E2E and component testing'
    ]
  },
  {
    title: 'SpendTrack',
    desc: 'This full-stack project was built in less than 2 days as a stress test to challenge my ability to work within tight deadlines.',
    imgSrc: 'assets/pictures/SpendTrackLogo.png',
    imgSrcDark: 'assets/pictures/SpendTrackLogo.png',
    alt: 'Spendtrack app logo',
    stack: ['Vue', 'Typescript', 'SQLAlchemy', 'Postgresql'],
    github: 'https://github.com/Bobotato/spendtrack'
  },
  {
    title: 'Weather Forecasting',
    desc: 'This project was built to learn about promises, APIs and fetching resources, specifically revolving around the Fetch API and async/await.',
    imgSrc: 'assets/pictures/3DWeatherLogo.png',
    imgSrcDark: 'assets/pictures/3DWeatherLogoDark.png',
    alt: 'Weather forecast app logo',
    stack: ['Tailwind', 'Vue', 'Typescript', 'SQL', 'Python'],
    github: 'https://github.com/Bobotato/weather-app-vue-edition'
  }
]

export { portfolioData }
