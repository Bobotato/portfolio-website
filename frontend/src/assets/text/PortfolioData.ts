export interface PortfolioPreview {
    title: string
    desc: string
    previewImgURI: string
    stack: Array<string>
    github: string
}

const weatherApplication: PortfolioPreview = {
    title: "Weather Forecasting",
    desc: "This project was built to learn about promises, APIs and fetching resources, specifically revolving around the Fetch API and async/await.",
    previewImgURI: "src/assets/pictures/3DWeatherLogo.png",
    stack: ['Tailwind', 'Vue', 'Typescript', 'SQL', 'CSS', 'Python'],
    github: "https://github.com/Bobotato/weather-app-vue-edition"
}

const hiloApplication: PortfolioPreview = {
    title: "Hilo",
    desc: "This project was built to encompass all my knowledge of frontend and backend to create a full-stack application. It is a simple game with a login and account system, custom assets for the frontend, a backend that handles some computation and a database to store player data.",
    previewImgURI: "src/assets/pictures/HiloLogo.png",
    stack: ['CSS', 'Python', 'Vue', 'Typescript', 'SQLAlchemy', 'Postgresql'],
    github: "https://github.com/Bobotato/game-hilo"
}

const spendTrackApplication: PortfolioPreview = {
    title: "SpendTrack",
    desc: "This full-stack project was built in less than 2 days as a stress test to challenge my ability to work within tight deadlines.",
    previewImgURI: "src/assets/pictures/SpendTrackLogo.png",
    stack: ['CSS', 'Vue', 'Typescript', 'SQLAlchemy', 'Postgresql'],
    github: "https://github.com/Bobotato/spendtrack"
}

export { weatherApplication, hiloApplication, spendTrackApplication }