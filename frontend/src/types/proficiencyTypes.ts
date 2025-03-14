interface ProficiencyItem {
    name: string
    imgSrc: string
    imgSrcDark?: string
    link?: string
    alt?: string
}

interface CertificationItem {
    name: string
    imgSrc: string
    imgSrcDark?: string
    link: string
    alt: string
}

export type { ProficiencyItem, CertificationItem }