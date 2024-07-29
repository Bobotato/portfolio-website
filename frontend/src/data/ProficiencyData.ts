import type { ProficiencyItem } from '@/types/proficiencyTypes'

const languageItems: ProficiencyItem[] = [
  {
    name: 'Python',
    imgSrc: '/assets/fullColourIcons/PythonIcon.png',
    link: 'https://www.python.org/',
    alt: 'Python Logo'
  },
  {
    name: 'Javascript',
    imgSrc: '/assets/fullColourIcons/JavascriptIcon.png',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    alt: 'Javascript Logo'
  },
  {
    name: 'Typescript',
    imgSrc: '/assets/fullColourIcons/TypescriptIcon.png',
    link: 'https://www.typescriptlang.org/',
    alt: 'Typescript Logo'
  },
  {
    name: 'Vue',
    imgSrc: '/assets/fullColourIcons/VueIcon.svg',
    link: 'https://vuejs.org/',
    alt: 'Vue Logo'
  },
  {
    name: 'React',
    imgSrc: '/assets/fullColourIcons/ReactIcon.svg',
    link: 'https://react.dev/',
    alt: 'React Logo'
  },
  {
    name: 'Next.js',
    imgSrc: '/assets/fullColourIcons/NextIcon.svg',
    imgSrcDark: '/assets/fullColourIcons/NextIconDark.svg',
    link: 'https://nextjs.org/',
    alt: 'NextJS Logo'
  },
  {
    name: 'Node.js',
    imgSrc: '/assets/fullColourIcons/NodeIcon.svg',
    link: 'https://nodejs.org/en',
    alt: 'NodeJS Logo'
  },
  {
    name: 'Tailwind',
    imgSrc: '/assets/fullColourIcons/TailwindIcon.png',
    link: 'https://tailwindcss.com/',
    alt: 'Tailwind Logo'
  },
  {
    name: 'MUI',
    imgSrc: '/assets/fullColourIcons/MUIIcon.svg',
    link: 'https://mui.com/',
    alt: 'Material UI Logo'
  },
  {
    name: 'ThreeJS',
    imgSrc: '/assets/fullColourIcons/ThreeJSIcon.svg',
    imgSrcDark: '/assets/fullColourIcons/ThreeJSIconDark.svg',
    link: 'https://threejs.org/',
    alt: 'ThreeJS Logo'
  }
]

const technologyItems: ProficiencyItem[] = [
  {
    name: 'AWS',
    imgSrc: '/assets/fullColourIcons/awsIcon.svg',
    link: 'https://aws.amazon.com/',
    alt: 'AWS Logo'
  },
  {
    name: 'DigitalOcean',
    imgSrc: '/assets/fullColourIcons/DOIcon.png',
    link: 'https://www.digitalocean.com/',
    alt: 'DigitalOcean Logo'
  },
  {
    name: 'Adobe CC',
    imgSrc: '/assets/fullColourIcons/AdobeCCIcon.png',
    link: 'https://www.adobe.com/sg/creativecloud.html',
    alt: 'Adobe Creative Suite Logo'
  }
]

const learningItems: ProficiencyItem[] = [
  
]

export { languageItems, technologyItems, learningItems }
