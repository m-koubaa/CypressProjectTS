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
      

      // Saisir le password et soumettre avec {enter}
      

      // Vérifier la connexion réussie, URL inclut /secure + Existence du message "You logged into a secure area!"
      
    })

    it('Devrait afficher une erreur avec des identifiants invalides', () => {
      

      // Vérifier le message d'erreur "Your username is invalid!"
      
    })
  })

  // =============================================
  // 2. Test Key Presses
  // =============================================

  describe('Key Presses', () => {

    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/key_presses')
    })

    it.skip('Devrait détecter la touche Enter', () => {
      
    })

    it.skip('Devrait détecter la touche Tab', () => {
      
    })

    it('Devrait détecter la touche Escape', () => {
      
    })


  })
})