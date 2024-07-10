/// <reference types="cypress" />

context('Routes', () => {
  it('Home loads', () => {
    cy.visit('/')
  }),
    it('About loads', () => {
      cy.visit('/about')
    }),
    it('Projects loads', () => {
      cy.visit('/projects')
    }),
    it('Experience loads', () => {
      cy.visit('/work-experience')
    }),
    it('404 loads', () => {
      cy.visit('/123')
    })
})
