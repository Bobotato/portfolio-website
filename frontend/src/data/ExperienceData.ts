import type { ExperiencePreview } from '@/types/experienceTypes'

const experienceData: ExperiencePreview[] = [
  {
    title: 'SmilePepper',
    position: 'Full Stack Dev, Marketing, Design',
    duration: '2022 - 2024',
    shortdesc:
      'As one of the co-founders of SmilePepper, I worked primarily as a junior full-stack dev with a front-end focus, building our product using Vue3 and Node.js. I also did the marketing, graphic design, and collaborated with our UIUX designer to develop the user experience.',
    jobList: [
      '• Designed and co-developed SmilePepper webapp and API using Vue3 and NodeJS',
      '• Improved API call response time by redesigning fetching functions and data storage shape to use time complexity optimised access methods',
      '• Cut more than 50% monthly cloud service expenditure by analysing and optimising cloud service usage',
      '• Researched and co-implemented payment gateway to accept Singapore exclusive payment methods for monetisation strategy',
      '• Implemented front-end testing using Cypress and integrated automated testing into BitBucket CI pipeline'
    ],
    previewImgURI: 'assets/pictures/SmilePepperLogo.png',
    previewImgURIDark: 'assets/pictures/SmilePepperLogoDark.png',
    link: 'https://smilepepper.com'
  },
  {
    title: 'Foodalicious Concepts',
    position: 'Digital and Marketing Consultant',
    duration: '2018 - 2022',
    shortdesc:
      'My responsibilities involved digitalising the operations of a fledgling seafood brand with a website and online ordering system with an order database, alongside marketing, design and R&D.',
    jobList: [
      '• Designed and built ChunkyLobsters.com using Figma and Wix for low-tech maintainability',
      '• Digitalised operations by developing an ordering and database system for online orders using Google forms integrated with Google Sheets',
      '• Automated regular daily backups of thousands of customer and order data across 3 outlets to AWS S3 using Powershell scripts',
      '• Significantly reduced delivery operations overhead while accomodating hundreds of weekly order volume across 3 outlets, quadrupling daily revenue during COVID crisis without increasing manpower costs with minimal tech expenditure'
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
