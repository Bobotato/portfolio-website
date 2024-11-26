import type { GalleriaItem } from "@/types/galleriaTypes"

export interface ExperienceItem {
  title: string
  position?: string
  duration: string
  shortdesc: string
  jobList?: Array<string>
  imgSrc: string
  imgSrcDark: string
  alt?: string
  link?: string
  previewImg?: string
  galleria?: GalleriaItem[]
}
