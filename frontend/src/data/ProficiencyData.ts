import type { ProficiencyItem } from '@/types/proficiencyTypes'

const languageItems: ProficiencyItem[] = [
  {
    name: 'Python',
    imgSrc: '/assets/fullColourIcons/PythonIcon.png',
    link: 'https://www.python.org/'
  },
  {
    name: 'Javascript',
    imgSrc: '/assets/fullColourIcons/JavascriptIcon.png',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  {
    name: 'Typescript',
    imgSrc: '/assets/fullColourIcons/TypescriptIcon.png',
    link: 'https://www.typescriptlang.org/'
  },
  {
    name: 'Vue',
    imgSrc: '/assets/fullColourIcons/VueIcon.svg',
    link: 'https://vuejs.org/'
  },
  {
    name: 'React',
    imgSrc: '/assets/fullColourIcons/ReactIcon.svg',
    link: 'https://react.dev/'
  },
  {
    name: 'Next.js',
    imgSrc: '/assets/fullColourIcons/NextIcon.svg',
    imgSrcDark: '/assets/fullColourIcons/NextIconDark.svg',
    link: 'https://nextjs.org/'
  },
  {
    name: 'Node.js',
    imgSrc: '/assets/fullColourIcons/NodeIcon.svg',
    link: 'https://nodejs.org/en'
  },
  {
    name: 'Tailwind',
    imgSrc: '/assets/fullColourIcons/TailwindIcon.png',
    link: 'https://tailwindcss.com/'
  },
  {
    name: 'MUI',
    imgSrc: '/assets/fullColourIcons/MUIIcon.svg',
    link: 'https://mui.com/'
  },
  {
    name: 'ThreeJS',
    imgSrc: '/assets/fullColourIcons/ThreeJSIcon.svg',
    imgSrcDark: '/assets/fullColourIcons/ThreeJSIconDark.svg',
    link: 'https://threejs.org/'
  }
]

const technologyItems: ProficiencyItem[] = [
  {
    name: 'AWS',
    imgSrc: '/assets/fullColourIcons/awsIcon.svg',
    link: 'https://aws.amazon.com/'
  },
  {
    name: 'DigitalOcean',
    imgSrc: '/assets/fullColourIcons/DOIcon.png',
    link: 'https://www.digitalocean.com/'
  },
  {
    name: 'Adobe CC',
    imgSrc: '/assets/fullColourIcons/AdobeCCIcon.png',
    link: 'https://www.adobe.com/sg/creativecloud.html'
  }
]

const learningItems: ProficiencyItem[] = [
  
]

export { languageItems, technologyItems, learningItems }
