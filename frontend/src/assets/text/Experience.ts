export interface ExperiencePreview {
    title: string
    desc: string
    previewImgURI: string
    stack: Array<string>
}

let weatherApplication: ExperiencePreview = {
    title: "Weather Application",
    desc: "This project was built to learn about promises, APIs and fetching resources, specifically revolving around the Fetch API and async/await.",
    previewImgURI: "@/assets/BWIcon/GithubIcon.svg",
    stack: ['Tailwind', 'Vue', 'SQL']

}   