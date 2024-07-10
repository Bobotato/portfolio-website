import ThemeToggle from './ThemeToggle.vue'

describe('<ThemeToggle />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(ThemeToggle)
  })
})