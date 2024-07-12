/// <reference types="cypress" />
declare namespace Cypress {
    interface Chainable<Subject = any> {
      gotoUsingNav(location: string): Chainable<null>
      pressDarkModeButton(): Chainable<null>
    }
  }