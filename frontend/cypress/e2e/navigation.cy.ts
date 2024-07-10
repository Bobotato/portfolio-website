/// <reference types="cypress" />

const ABOUT = '/about'
const PROJECTS = '/projects'
const WORKEX = '/work-experience'
const GITHUB = '/bobotato'

context('Navigation from Home', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('About link works', () => {
    cy.get('a[href*="about"]').click()
    cy.url().should('eq', Cypress.config().baseUrl + ABOUT)
  })
  it('Projects link works', () => {
    cy.get('a[href*="projects"]').click()
    cy.url().should('eq', Cypress.config().baseUrl + PROJECTS)
  })
  it('Experience link works', () => {
    cy.get('a[href*="experience"]').click()
    cy.url().should('eq', Cypress.config().baseUrl + WORKEX)
  })
  it('Github link works', () => {
    cy.get('#contact-menu-landing').within(() => {
      cy.get(`a[href*="${GITHUB}"]`).invoke('attr', 'target', '_self').click()
    })
    cy.origin('https://github.com', () => {
      cy.url().then((url) => {
        url = 'https://github.com/bobotato'
      })
    })
  })
})

context('Navigation from About', () => {
  beforeEach(() => {
    cy.visit('/about')
  })
  it('Home link works', () => {
    cy.get('a[href*="/"]').contains('Home').click()
    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })
  it('Projects link works', () => {
    cy.get('a[href*="projects"]').click()
    cy.url().should('eq', Cypress.config().baseUrl + PROJECTS)
  })
  it('Experience link works', () => {
    cy.get('a[href*="experience"]').click()
    cy.url().should('eq', Cypress.config().baseUrl + WORKEX)
  })
})

context('Navigation from Projects', () => {
  beforeEach(() => {
    cy.visit('/projects')
  })
  it('Home link works', () => {
    cy.get('a[href*="/"]').contains('Home').click()
    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })
  it('About link works', () => {
    cy.get('a[href*="about"]').click()
    cy.url().should('eq', Cypress.config().baseUrl + ABOUT)
  })
  it('Experience link works', () => {
    cy.get('a[href*="experience"]').click()
    cy.url().should('eq', Cypress.config().baseUrl + WORKEX)
  })
})

context('Navigation from Work Experience', () => {
  beforeEach(() => {
    cy.visit('/work-experience')
  })
  it('Home link works', () => {
    cy.get('a[href*="/"]').contains('Home').click()
    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })
  it('About link works', () => {
    cy.get('a[href*="about"]').click()
    cy.url().should('eq', Cypress.config().baseUrl + ABOUT)
  })
  it('Projects link works', () => {
    cy.get('a[href*="projects"]').click()
    cy.url().should('eq', Cypress.config().baseUrl + PROJECTS)
  })
})

context('Navigation from 404', () => {
  it('Home link works', () => {
    cy.visit('/12345')
    cy.get('a[href*="/"]').contains('Press here to go back home.').click()
    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })
})
