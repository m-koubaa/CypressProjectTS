describe('Fonctions Avancées - Exercice', () => {

  beforeEach(() => {
    // Préparation : Se connecter
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory.html')
  })

  // =============================================
  // EXERCICE 1 : Calculer le total des prix
  // =============================================
  it('devrait calculer le total des prix avec .then()', () => {
    let total = 0

    cy.get('.inventory_item_price').each(($el) => {
      // Extraire le prix (supprimer le $)
      const price = parseFloat($el.text().replace('$', ''))
      total += price
    }).then(() => {
      // Vérifier que le total est supérieur à 100
      cy.log(`Total: $${total}`)
      
      expect(total).to.be.greaterThan(100)
    })
  })

  // =============================================
  // EXERCICE 2 : Vérifier une carte produit
  // =============================================
  it('devrait vérifier une carte produit avec .within()', () => {
    // Sélectionner le premier produit
    cy.get('.inventory_item').first().within(() => {
      // Vérifier que le nom existe
      cy.get('.inventory_item_name').should('exist').and('be.visible')

      // Vérifier que le prix existe
      cy.get('.inventory_item_price').should('exist').and('contain', '$')

      // Vérifier que le bouton existe
      cy.get('button').should('exist').and('be.enabled')
    })
  })

  // =============================================
  // EXERCICE 3 : Lire la valeur du tri
  // =============================================
  it('devrait lire la valeur du tri avec .invoke()', () => {
    // Récupérer la valeur du dropdown de tri
    cy.get('.product_sort_container')
      .invoke('val')
      .then((value) => {
        cy.log(`Valeur du tri: ${value}`)
        // Vérifier qu'elle contient "az" (A to Z)
        expect(value).to.equal('az')
      })
  })

})