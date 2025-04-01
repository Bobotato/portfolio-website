interface ProficiencyItem {
    id: number
    name: string
    imgSrc: string
    imgSrcDark?: string
    link?: string
    alt?: string
}

interface CertificationItem {
    id: number
    name: string
    shortName: string
    imgSrc: string
    link: string
    alt: string
}

export type { ProficiencyItem, CertificationItem }