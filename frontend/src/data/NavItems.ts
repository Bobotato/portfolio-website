import type { NavItem } from '@/types/navTypes'

const NavItems: NavItem[] = [
  { name: 'home', label: 'Home', route: '/' },
  { name: 'about', label: 'About', route: '/about' },
  { name: 'projects', label: 'Projects', route: '/projects' },
  { name: 'experience', label: 'Experience', route: '/experience' }
]

export { NavItems }
