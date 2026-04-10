// /// <reference types="cypress" />

describe('Exercice Formulaires - The Internet', () => {

  // =============================================
  // 1. Test Login
  // =============================================

  describe('Login', () => {

    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/login')
    })

    it('Devrait se connecter avec succès en utilisant {enter}', () => {
      // Saisir le username
      cy.get('#username').should('be.visible').type('tomsmith')

      // Saisir le password et soumettre avec {enter}
      cy.get('#password').should('be.visible').type('SuperSecretPassword!{enter}')
      

      // Vérifier la connexion réussie, URL inclut /secure + Existence du message "You logged into a secure area!"
      cy.url().should('include','/secure')
      cy.get('#flash').should('be.visible').should('contain', 'You logged into a secure area!')
      
    })

    it('Devrait afficher une erreur avec des identifiants invalides', () => {
      cy.get('#username').should('be.visible').type('fakeuser')
      cy.get('#password').should('be.visible').type('fakepassw')
      cy.get('button[type=submit]').should('be.visible').click()

      // Vérifier le message d'erreur "Your username is invalid!"
      cy.get('#flash').should('be.visible').should('contain', 'Your username is invalid!')
      
    })
  })

  // =============================================
  // 2. Test Key Presses
  // =============================================

  describe('Key Presses', () => {

    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/key_presses')
    })

    it('Devrait détecter la touche Enter', () => {
      cy.get('input#target').should('be.visible').type('{enter}')
      cy.get('#result').should('have.text', 'You entered: ENTER')
      
    })

    it('Devrait détecter la touche Control', () => {
      cy.get('input#target').type('{ctrl}')
      cy.get('#result').should('have.text', 'You entered: CONTROL')
    })

    it('Devrait détecter la touche Escape', () => {
      cy.get('#target').type('{esc}')
      cy.get('#result').should('have.text', 'You entered: ESCAPE')
      
    })

    it.only('Devrait détecter la touche Tab', () => {
      //cy.get('input#target').focus()
      //cy.press('Tab')
      cy.get('#target').focus().realPress('Tab')
      cy.get('#result').should('have.text', 'You entered: TAB')
      
    })


    it('Devrait détecter la touche Tab', () => {
      cy.get('input#target')
        .focus()
        .trigger('keydown', { key: 'Tab', keyCode: 9})
  
      cy.get('#result').should('contain', 'TAB')
    })

    


  })
})