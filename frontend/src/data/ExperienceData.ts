import type { ExperiencePreview } from '@/types/experienceTypes'

const experienceData: ExperiencePreview[] = [
  {
    title: 'SmilePepper',
    position: 'Full Stack Dev, Marketing, Design',
    duration: '2022 - 2024',
    shortdesc:
      'In this startup, I worked primarily as a junior full-stack dev, building our product using Vue3 and Node.js. I also did the marketing, graphic design, and collaborated with our UIUX designer to develop the user experience.',
    jobList: [
      'Designed and co-developed SmilePepper webapp and API using Vue3 and NodeJS',
      'Improved API call response time by redesigning fetching functions and data storage shape to use time complexity optimised access methods',
      'Cut more than 50% monthly cloud service expenditure by analysing and optimising cloud service usage',
      'Researched and co-implemented payment gateway to accept Singapore exclusive payment methods for monetisation strategy',
      'Implemented front-end testing using Cypress and integrated automated testing into BitBucket CI pipeline'
    ],
    previewImgURI: 'assets/pictures/SmilePepperLogo.png',
    previewImgURIDark: 'assets/pictures/SmilePepperLogoDark.png',
    link: 'https://smilepepper.com'
  },
  {
    title: 'Foodalicious Concepts',
    position: 'Director',
    duration: '2018 - 2022',
    shortdesc:
      'My responsibilities involved digitalising the operations of a fledgling seafood brand with a website and online ordering system with an order database, alongside marketing, design and R&D.',
    jobList: [
      'Designed and built ChunkyLobsters.com using Figma and Wix',
      'Built low-tech ordering and database system for online orders using Google forms integrated with Google sheets, with AWS S3 for backups',
      'Reduced manpower costs for delivery ops to negligible amounts, accomodating total order revenue reaching 5 digit figures daily across 3 outlets',
      'Marketing strategy revamp led increase to 1mm yearly projected revenue during COVID crisis without increasing manpower costs and minimal tech expenditure'
    ],
    previewImgURI: 'assets/pictures/FoodaliciousConceptsLogo.png',
    previewImgURIDark: 'assets/pictures/FoodaliciousConceptsLogo.png',
    link: 'https://chunkylobsters.com'
  },
  {
    title: 'Freelance Work',
    duration: 'Ongoing',
    shortdesc:
      'While learning to become a full stack developer, I designed and built websites and small applications for friends, family and referrals. These helped with the soft skills involved with negotiating and working with clients, and exposed me to the rigours of working with actual clients to achieve their business needs within a deadline.',
    previewImgURI: 'assets/pictures/ZhangTuitionLogo.png',
    previewImgURIDark: 'assets/pictures/ZhangTuitionLogoDark.png'
  }
]

export { experienceData }
