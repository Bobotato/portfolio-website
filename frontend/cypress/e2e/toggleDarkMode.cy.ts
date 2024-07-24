/// <reference types="cypress" />

context('DarkMode', () => {
  it('Darkmode works from home', () => {
    cy.visit('/')
    cy.get('div[id="app"').within(() => {
        cy.get('div').should('have.css', 'background-color').and('eq', 'rgb(244, 244, 245)')
      })
    cy.pressDarkModeButton()
    cy.get('div[id="app"').within(() => {
      cy.get('div').should('have.css', 'background-color').and('eq', 'rgb(24, 24, 27)')
    })
  })
  it('Darkmode works from about', () => {
    cy.visit('/about')
    cy.get('div[id="app"').within(() => {
        cy.get('div').should('have.css', 'background-color').and('eq', 'rgb(244, 244, 245)')
      })
    cy.pressDarkModeButton()
    cy.get('div[id="app"').within(() => {
      cy.get('div').should('have.css', 'background-color').and('eq', 'rgb(24, 24, 27)')
    })
  })
  it('Darkmode works from projects', () => {
    cy.visit('/projects')
    cy.get('div[id="app"').within(() => {
        cy.get('div').should('have.css', 'background-color').and('eq', 'rgb(244, 244, 245)')
      })
    cy.pressDarkModeButton()
    cy.get('div[id="app"').within(() => {
      cy.get('div').should('have.css', 'background-color').and('eq', 'rgb(24, 24, 27)')
    })
  })
  it('Darkmode works from experience', () => {
    cy.visit('/experience')
    cy.get('div[id="app"').within(() => {
        cy.get('div').should('have.css', 'background-color').and('eq', 'rgb(244, 244, 245)')
      })
    cy.pressDarkModeButton()
    cy.get('div[id="app"').within(() => {
      cy.get('div').should('have.css', 'background-color').and('eq', 'rgb(24, 24, 27)')
    })
  })
  it('Darkmode works from 404', () => {
    cy.visit('/123123')
    cy.get('div[id="app"').within(() => {
        cy.get('div').should('have.css', 'background-color').and('eq', 'rgb(244, 244, 245)')
      })
    cy.pressDarkModeButton()
    cy.get('div[id="app"').within(() => {
      cy.get('div').should('have.css', 'background-color').and('eq', 'rgb(24, 24, 27)')
    })
  })
})

context('DarkMode Persists', () => {
  it('Darkmode persists on page change', () => {
    cy.visit('/')
    cy.get('div[id="app"').within(() => {
        cy.get('div').should('have.css', 'background-color').and('eq', 'rgb(244, 244, 245)')
      })
    cy.pressDarkModeButton()
    cy.visit('/about')
    cy.get('div[id="app"').within(() => {
      cy.get('div').should('have.css', 'background-color').and('eq', 'rgb(24, 24, 27)')
    })
  })
})
