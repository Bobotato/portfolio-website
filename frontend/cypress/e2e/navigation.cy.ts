/// <reference types="cypress" />

const ABOUT = '/about'
const PROJECTS = '/projects'
const WORKEX = '/experience'
const GITHUB = 'https://github.com/bobotato'
const LINKEDIN = 'https://sg.linkedin.com/in/alexanderbhojwani'
const INSTA = 'https://instagram.com/bobotato'

context('Navigation from Home', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('About link works from home', () => {
    cy.gotoUsingNav('about')
    cy.url().should('eq', Cypress.config().baseUrl + ABOUT)
  })
  it('Projects link works from home', () => {
    cy.gotoUsingNav('projects')
    cy.url().should('eq', Cypress.config().baseUrl + PROJECTS)
  })
  it('Experience link works from home', () => {
    cy.gotoUsingNav('experience')
    cy.url().should('eq', Cypress.config().baseUrl + WORKEX)
  })
  it('Github link works from home', () => {
    cy.get('#contact-menu-landing').within(() => {
      cy.get(`a[href*="${GITHUB}"]`).click()
    })
  })
  it('Instagram link works from home', () => {
    cy.get('#contact-menu-landing').within(() => {
      cy.get(`a[href*="${INSTA}"]`).click()
    })
  })
  it('Linkedin link works from home', () => {
    cy.get('#contact-menu-landing').within(() => {
      cy.get(`a[href*="${LINKEDIN}"]`).click()
    })
  })
})

context('Navigation from About', () => {
  beforeEach(() => {
    cy.visit('/about')
  })
  it('Home link works from About', () => {
    cy.gotoUsingNav('home')
    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })
  it('Projects link works from About', () => {
    cy.gotoUsingNav('projects')
    cy.url().should('eq', Cypress.config().baseUrl + PROJECTS)
  })
  it('Experience link works from About', () => {
    cy.gotoUsingNav('experience')
    cy.url().should('eq', Cypress.config().baseUrl + WORKEX)
  })
})

context('Navigation from Projects', () => {
  beforeEach(() => {
    cy.visit('/projects')
  })
  it('Home link works from Projects', () => {
    cy.gotoUsingNav('home')
    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })
  it('About link works from Projects', () => {
    cy.gotoUsingNav('about')
    cy.url().should('eq', Cypress.config().baseUrl + ABOUT)
  })
  it('Experience link works from Projects', () => {
    cy.gotoUsingNav('experience')
    cy.url().should('eq', Cypress.config().baseUrl + WORKEX)
  })
})

context('Navigation from Work Experience', () => {
  beforeEach(() => {
    cy.visit('/experience')
  })
  it('Home link works from experience', () => {
    cy.gotoUsingNav('home')
    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })
  it('About link works from experience', () => {
    cy.gotoUsingNav('about')
    cy.url().should('eq', Cypress.config().baseUrl + ABOUT)
  })
  it('Projects link works from experience', () => {
    cy.gotoUsingNav('projects')
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
