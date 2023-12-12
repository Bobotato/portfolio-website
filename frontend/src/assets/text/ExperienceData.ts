export interface ExperiencePreview {
    title: string
    position?: string
    duration: string
    shortdesc: string
    responsbilityList?: Array<string>
    previewImgURI: string
    previewImgMobileURI?: string
    link?: string
}

const FOODALICIOUSCONCEPTS: ExperiencePreview = {
    title: "Foodalicious Concepts",
    position: "Director",
    duration: "2018 - 2022",
    shortdesc: "This is where I started my journey, digitalising a lobster shack with a fresh new website and online ordering system with an order database. I was their marketing director at that time, pioneering the introduction of low cost lobster rolls to the Singaporean market.",
    responsbilityList: [ "Designed and built ChunkyLobsters.com using Figma and Wix CMS", "Built low-tech ordering system for online orders using Google forms, Google sheets and AWS S3 for backups.", ],
    previewImgURI: "src/assets/pictures/FoodaliciousConceptsLogo.png",
    link: "https://chunkylobsters.com"
}

const SMILEPEPPER: ExperiencePreview = {
    title: "SmilePepper",
    position: "Junior Frontend Dev, Marketing, Design",
    duration: "2022 - 2023",
    shortdesc: "In this startup, I worked primarily as a junior frontend dev, building our product using Vue3 and Tailwind. I also did the marketing, financials and graphic design.",
    previewImgURI: "src/assets/pictures/SmilePepperLogo.png",
    link: "https://smilepepper.com"
}

const FREELANCEWORK: ExperiencePreview = {
    title: "Freelance Work",
    duration: "Ongoing",
    shortdesc: "While learning to become a full stack developer, I designed and built websites for clients to improve my understanding of good web design, as well as working with actual clients to achieve their business needs within a deadline.",
    previewImgURI: "src/assets/pictures/ZhangTuitionLogo.png",
}

export { FOODALICIOUSCONCEPTS, SMILEPEPPER, FREELANCEWORK }