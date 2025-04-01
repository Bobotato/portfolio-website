import type { ProficiencyItem, CertificationItem } from '@/types/proficiencyTypes'

const languageItems: ProficiencyItem[] = [
  {
    id: 1,
    name: 'Python',
    imgSrc: '/assets/fullColourIcons/PythonIcon.png',
    link: 'https://www.python.org/',
    alt: 'Python Logo'
  },
  {
    id: 2,
    name: 'Javascript',
    imgSrc: '/assets/fullColourIcons/JavascriptIcon.png',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    alt: 'Javascript Logo'
  },
  {
    id: 3,
    name: 'Typescript',
    imgSrc: '/assets/fullColourIcons/TypescriptIcon.png',
    link: 'https://www.typescriptlang.org/',
    alt: 'Typescript Logo'
  },
  {
    id: 4,
    name: 'Vue',
    imgSrc: '/assets/fullColourIcons/VueIcon.svg',
    link: 'https://vuejs.org/',
    alt: 'Vue Logo'
  },
  {
    id: 5,
    name: 'React',
    imgSrc: '/assets/fullColourIcons/ReactIcon.svg',
    link: 'https://react.dev/',
    alt: 'React Logo'
  },
  {
    id: 6,
    name: 'Next.js',
    imgSrc: '/assets/fullColourIcons/NextIcon.svg',
    imgSrcDark: '/assets/fullColourIcons/NextIconDark.svg',
    link: 'https://nextjs.org/',
    alt: 'NextJS Logo'
  },
  {
    id: 7,
    name: 'Node.js',
    imgSrc: '/assets/fullColourIcons/NodeIcon.svg',
    link: 'https://nodejs.org/en',
    alt: 'NodeJS Logo'
  },
  {
    id: 8,
    name: 'Tailwind',
    imgSrc: '/assets/fullColourIcons/TailwindIcon.png',
    link: 'https://tailwindcss.com/',
    alt: 'Tailwind Logo'
  },
  {
    id: 9,
    name: 'MUI',
    imgSrc: '/assets/fullColourIcons/MUIIcon.svg',
    link: 'https://mui.com/',
    alt: 'Material UI Logo'
  },
  {
    id: 10,
    name: 'ThreeJS',
    imgSrc: '/assets/fullColourIcons/ThreeJSIcon.svg',
    imgSrcDark: '/assets/fullColourIcons/ThreeJSIconDark.svg',
    link: 'https://threejs.org/',
    alt: 'ThreeJS Logo'
  }
]

const technologyItems: ProficiencyItem[] = [
  {
    id: 1,
    name: 'AWS',
    imgSrc: '/assets/fullColourIcons/awsIcon.svg',
    link: 'https://aws.amazon.com/',
    alt: 'AWS Logo'
  },
  {
    id: 2,
    name: 'DigitalOcean',
    imgSrc: '/assets/fullColourIcons/DOIcon.png',
    link: 'https://www.digitalocean.com/',
    alt: 'DigitalOcean Logo'
  },
  {
    id: 3,
    name: 'Adobe CC',
    imgSrc: '/assets/fullColourIcons/AdobeCCIcon.png',
    link: 'https://www.adobe.com/sg/creativecloud.html',
    alt: 'Adobe Creative Suite Logo'
  },
  {
    id: 4,
    name: 'Docker',
    imgSrc: '/assets/fullColourIcons/DockerIcon.svg',
    link: 'https://www.docker.com/',
    alt: 'Docker Logo'
  },
  {
    id: 5,
    name: 'Ansible',
    imgSrc: '/assets/fullColourIcons/AnsibleIcon.svg',
    link: 'https://www.ansible.com/',
    alt: 'Ansible Logo'
  },
  {
    id: 6,
    name: 'Terraform',
    imgSrc: '/assets/fullColourIcons/TerraformIcon.svg',
    link: 'https://www.terraform.io/',
    alt: 'Terraform Logo'
  }
]

const learningItems: ProficiencyItem[] = []

const certificationItems: CertificationItem[] = [
  {
    id: 1,
    name: 'Tableau Desktop Specialist',
    shortName: 'Tableau DS',
    imgSrc: '/assets/badges/tableau-desktop-specialist.png',
    link: 'https://www.credly.com/badges/58ef54f1-0142-44a4-837d-4f3e54578efa/public_url',
    alt: 'Tableau Desktop Specialist Certification'
  },
  {
    id: 2,
    name: 'AWS Certified Cloud Practitioner',
    shortName: 'AWS CCP',
    imgSrc: '/assets/badges/aws-certified-cloud-practitioner.png',
    link: 'https://www.credly.com/badges/38e58b2a-1b11-454f-a862-e39d398c3d3e/public_url',
    alt: 'AWS Certified Cloud Practitioner Certification'
  }
]

export { languageItems, technologyItems, learningItems, certificationItems }
