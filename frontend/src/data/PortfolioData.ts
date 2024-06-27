import type { PortfolioPreview } from '@/types/portfolioTypes'

const portfolioData: PortfolioPreview[] = [
  {
    title: 'Hilo',
    desc: 'This project was built to encompass all my knowledge of frontend and backend to create a full-stack application. It is a simple game with a login and account system, custom assets for the frontend, a backend that handles some computation and a database to store player data.',
    previewImgURI: 'assets/pictures/HiloLogo.png',
    previewImgURIDark: 'assets/pictures/HiloLogo.png',
    stack: ['CSS', 'Python', 'Vue', 'Typescript', 'SQLAlchemy', 'Postgresql'],
    github: 'https://github.com/Bobotato/game-hilo'
  },
  {
    title: 'Weather Forecasting',
    desc: 'This project was built to learn about promises, APIs and fetching resources, specifically revolving around the Fetch API and async/await.',
    previewImgURI: 'assets/pictures/3DWeatherLogo.png',
    previewImgURIDark: 'assets/pictures/3DWeatherLogoDark.png',
    stack: ['Tailwind', 'Vue', 'Typescript', 'SQL', 'CSS', 'Python'],
    github: 'https://github.com/Bobotato/weather-app-vue-edition'
  },

  {
    title: 'SpendTrack',
    desc: 'This full-stack project was built in less than 2 days as a stress test to challenge my ability to work within tight deadlines.',
    previewImgURI: 'assets/pictures/SpendTrackLogo.png',
    previewImgURIDark: 'assets/pictures/SpendTrackLogo.png',
    stack: ['CSS', 'Vue', 'Typescript', 'SQLAlchemy', 'Postgresql'],
    github: 'https://github.com/Bobotato/spendtrack'
  },
  {
    title: 'Overlord',
    desc: 'This full-stack project was built to learn how to use AI and prompt engineering to offload some daily management and planning tasks, improving my efficiency. It uses the ChatGPT-3.5-Turbo API to filter and prioritise my daily tasks by relevance and importance towards a predefined monthly goal.',
    previewImgURI: 'assets/pictures/OverlordLogo.png',
    previewImgURIDark: 'assets/pictures/OverlordLogoDark.png',
    stack: ['Tailwind', 'CSS', 'Vue', 'Python', 'OpenAI', 'Typescript'],
    github: 'https://github.com/Bobotato/overlord-be'
  },
  {
    title: 'Portfolio Website',
    desc: 'This very website was built as a way of testing myself to produce a polished, responsive and user-friendly website with an inclusion of an unfamiliar niche framework (ThreeJS). I also used the opportunity to create a CICD pipeline that would automate the update of the remote host, so that I would only have to worry about building the website content.',
    previewImgURI: 'assets/pictures/PortfolioLogo.png',
    previewImgURIDark: 'assets/pictures/PortfolioLogoDark.png',
    stack: ['Tailwind', 'CSS', 'Vue', 'Three', 'Typescript'],
    github: 'https://github.com/Bobotato/portfolio-website'
  }
]

export { portfolioData }
