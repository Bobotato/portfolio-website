export interface ExperiencePreview {
    title: string
    desc: string
    previewImgURI: string
    previewImgMobileURI?: string
    link?: string
}

const foodaliciousConcepts: ExperiencePreview = {
    title: "Foodalicious Concepts/Chunky Lobsters",
    desc: "This is where I started my journey, digitalising a lobster shack with a fresh new website and online ordering system with an order database.",
    previewImgURI: "src/assets/pictures/3DWeatherLogo.png",
    link: "https://chunkylobsters.com"
}

const smilePepper: ExperiencePreview = {
    title: "SmilePepper",
    desc: "In this startup, I worked primarily as a junior frontend dev, building our product using Vue3 and Tailwind. I also did the marketing, financials and graphic design.",
    previewImgURI: "src/assets/pictures/HiloLogo.png",
    link: "https://smilepepper.com"
}

const freelanceWork: ExperiencePreview = {
    title: "Freelance Work",
    desc: "While learning to become a full stack developer, I designed and built websites for clients to improve my understanding of good web design, as well as working with actual clients to achieve their business needs within a deadline.",
    previewImgURI: "src/assets/pictures/SpendTrackLogo.png",
}

export { foodaliciousConcepts, smilePepper, freelanceWork }