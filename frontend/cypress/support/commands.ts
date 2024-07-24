/// <reference types="cypress" />
function gotoUsingNav(location: string) {
  cy.get('nav').find('a').contains(location, { matchCase: false }).click()
}

function pressDarkModeButton() {
  cy.get('button[id="theme-toggle"]').click()
}

Cypress.Commands.add('gotoUsingNav', gotoUsingNav)
Cypress.Commands.add('pressDarkModeButton', pressDarkModeButton)
