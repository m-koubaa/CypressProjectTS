// =============================================
declare global {
  namespace Cypress {
    interface Chainable {
      // Commande Parent
      login(username: string, password: string): Chainable<void>
      
      // Commande Child
      addToCart(): Chainable<JQuery<HTMLElement>>
      
      // Commande Dual
      verifyText(text: string, selector?: string): Chainable<JQuery<HTMLElement>>
    }
  }
}

// =============================================
// COMMANDE PARENT : login
// =============================================
Cypress.Commands.add('login', (username: string, password: string) => {
  cy.visit('https://www.saucedemo.com')
  cy.get('#user-name').type(username)
  cy.get('#password').type(password)
  cy.get('#login-button').click()
})

// =============================================
// COMMANDE CHILD : addToCart
// =============================================
Cypress.Commands.add('addToCart', { prevSubject: 'element' },
  (subject: JQuery<HTMLElement>) => {
    cy.wrap(subject).find('button').contains('Add to cart').click()
  }
)

// =============================================
// COMMANDE DUAL : verifyText
// =============================================
Cypress.Commands.add('verifyText', { prevSubject: 'optional' },
  (subject: JQuery<HTMLElement> | undefined, text: string, selector?: string) => {
    if (subject) {
      // Mode Child : utiliser l'élément reçu
      cy.wrap(subject).should('contain', text)
    } else {
      // Mode Parent : chercher avec le sélecteur
      cy.get(selector!).should('contain', text)
    }
  }
)

export {}