/// <reference types="cypress" />

describe('Exercice Assertions', () => {

  // =============================================
  // 1. Visibilité (be.visible, not.be.visible)
  // =============================================

  describe('Visibilité', () => {

    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/login')
    })

    it('Devrait vérifier les éléments visibles', () => {
      // be.visible
      cy.get('#login').should('be.visible')
      cy.get('#username').should('be.visible')
      cy.get('#password').should('be.visible')
      cy.get('button[type="submit"]').should('be.visible')
    })

    it('Devrait vérifier les éléments non visibles', () => {
      // not.be.visible - le message flash n'est pas visible au départ
      cy.get('#flash').should('not.exist')
    })
  })

  // =============================================
  // 2. Texte (have.text, contain)
  // =============================================

  describe('Texte', () => {

    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/login')
    })

    it('Devrait vérifier le texte exact (have.text)', () => {
      // have.text - texte exact
      cy.get('h2').should('have.text', 'Login Page')
      cy.get('button[type="submit"] i').should('have.text', ' Login')
    })

    it('Devrait vérifier le texte partiel (contain)', () => {
      // contain - contient le texte
      cy.get('h2').should('contain', 'Login')
      cy.get('h4').should('contain', 'username')
      cy.get('h4').should('contain', 'password')
    })
  })

  // =============================================
  // 3. Attributs (have.attr, have.value)
  // =============================================

  describe('Attributs', () => {

    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/login')
    })

    it('Devrait vérifier les attributs (have.attr)', () => {
      // have.attr - vérifier un attribut
      cy.get('#username').should('have.attr', 'name', 'username')
      cy.get('#password').should('have.attr', 'name', 'password')
      cy.get('#password').should('have.attr', 'type', 'password')
    })

    it('Devrait vérifier les valeurs (have.value)', () => {
      // have.value - après avoir tapé
      cy.get('#username').type('tomsmith')
      cy.get('#username').should('have.value', 'tomsmith')

      cy.get('#password').type('SuperSecretPassword!')
      cy.get('#password').should('have.value', 'SuperSecretPassword!')
    })
  })

  // =============================================
  // 4. Classes (have.class, not.have.class)
  // =============================================

  describe('Classes', () => {

    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/login')
    })

    it('Devrait vérifier les classes après connexion réussie', () => {
      // Se connecter
      cy.get('#username').type('tomsmith')
      cy.get('#password').type('SuperSecretPassword!')
      cy.get('button[type="submit"]').click()

      // have.class - message de succès
      cy.get('#flash').should('have.class', 'success')
      cy.get('#flash').should('not.have.class', 'error')
    })

    it('Devrait vérifier les classes après connexion échouée', () => {
      // Mauvais identifiants
      cy.get('#username').type('wronguser')
      cy.get('#password').type('wrongpassword')
      cy.get('button[type="submit"]').click()

      // have.class - message d'erreur
      cy.get('#flash').should('have.class', 'error')
      cy.get('#flash').should('not.have.class', 'success')
    })
  })

  // =============================================
  // 5. URL (include)
  // =============================================

  describe('URL', () => {

    it('Devrait vérifier l\'URL après connexion', () => {
      cy.visit('https://the-internet.herokuapp.com/login')

      // URL initiale
      cy.url().should('include', '/login')

      // Se connecter
      cy.get('#username').type('tomsmith')
      cy.get('#password').type('SuperSecretPassword!')
      cy.get('button[type="submit"]').click()

      // URL après connexion - include
      cy.url().should('include', '/secure')
      cy.url().should('not.include', '/login')
    })
  })

  // =============================================
  // 6. Autres assertions utiles
  // =============================================

  describe('Autres Assertions', () => {

    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/login')
    })

    it('Devrait vérifier l\'existence (exist, not.exist)', () => {
      cy.get('#username').should('exist')
      cy.get('#nonexistent').should('not.exist')
    })

    it('Devrait vérifier l\'état activé/désactivé', () => {
      // be.enabled / be.disabled
      cy.get('#username').should('be.enabled')
      cy.get('button[type="submit"]').should('be.enabled')
    })

    it('Devrait vérifier la longueur (have.length)', () => {
      // have.length - nombre d'inputs
      cy.get('input').should('have.length', 2)
    })

    it('Devrait vérifier le CSS (have.css)', () => {
      // have.css - propriété CSS
      cy.get('button[type="submit"]').should('have.css', 'cursor', 'pointer')
    })
  })
})