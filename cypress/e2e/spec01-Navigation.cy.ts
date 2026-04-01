// /// <reference types="cypress" />

describe('Exercice Navigation et Sélection', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  })

  // =============================================
  // 1. Navigation
  // =============================================

  describe('Navigation', () => {

    it('Devrait naviguer sur le site', () => {
      // Vérifier le titre
      cy.title().should('contain', 'Cypress')
      
      

      // Cliquer sur Utilities
      cy.contains('Utilities').click()

      // Vérifier l'URL
      cy.url().should('include', '/utilities')

      // Revenir en arrière
      cy.go('back')

      // Vérifier le retour
      cy.url().should('eq', 'https://example.cypress.io/')

      // Recharger
      cy.reload()
    })
  })

  // =============================================
  // 2. Sélection d'éléments
  // =============================================

  describe('Sélection', () => {

    it('Devrait sélectionner le premier lien', () => {
      cy.get('.home-list a').first().should('exist')
      cy.get('.home-list a').first().click()
    })

    it('Devrait sélectionner le dernier lien', () => {
      cy.get('.home-list a').last().should('exist')
      cy.get('.home-list a').last().click()
    })

    it('Devrait sélectionner le 3ème lien', () => {
      cy.get('.home-list a').eq(2).should('exist')
      cy.get('.home-list a').eq(2).click()
    })

    it('Devrait trouver un élément avec find', () => {
      cy.get('.navbar').find('a').should('exist')
      cy.get('.navbar').find('a').eq(3).click({force:true})
    })
  })
})