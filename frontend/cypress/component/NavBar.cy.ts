import NavBar from '../NavBar.vue'

it('mounts', () => {
  cy.mount(NavBar, {
    props: {
      navItems: [
        { name: 'home', label: 'Home', route: '/' },
        { name: 'about', label: 'About', route: '/about' },
        { name: 'projects', label: 'Projects', route: '/projects' },
        { name: 'workexperience', label: 'Experience', route: '/work-experience' }
      ]
    }
  })
})
