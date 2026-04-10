describe('Test des Commandes Personnalisées', () => {

  // =============================================
  // TEST COMMANDE PARENT : login
  // =============================================
  describe('Commande Parent : login', () => {

    it('devrait se connecter avec succès', () => {
      cy.login('standard_user', 'secret_sauce')
      cy.url().should('include', '/inventory.html')
      cy.get('.title').should('have.text', 'Products')
    })

    it('devrait afficher une erreur avec identifiants invalides', () => {
      cy.login('wrong_user', 'wrong_pass')
      cy.get('[data-test="error"]').should('be.visible')
    })

  })

  // =============================================
  // TEST COMMANDE CHILD : addToCart
  // =============================================
  describe('Commande Child : addToCart', () => {

    beforeEach(() => {
      cy.login('standard_user', 'secret_sauce')
    })

    it('devrait ajouter un produit au panier', () => {
      cy.get('.inventory_item').first().addToCart()
      cy.get('.shopping_cart_badge').should('have.text', '1')
    })

    it('devrait ajouter plusieurs produits au panier', () => {
      cy.get('.inventory_item').eq(0).addToCart()
      cy.get('.inventory_item').eq(1).addToCart()
      cy.get('.shopping_cart_badge').should('have.text', '2')
    })

    it('devrait changer le bouton en Remove après ajout', () => {
      cy.get('.inventory_item').first().addToCart()
      cy.get('.inventory_item').first()
        .find('button')
        .should('have.text', 'Remove')
    })

  })

  // =============================================
  // TEST COMMANDE DUAL : verifyText
  // =============================================
  describe('Commande Dual : verifyText', () => {

    beforeEach(() => {
      cy.login('standard_user', 'secret_sauce')
    })

    it('devrait vérifier le texte en mode Parent', () => {
      // Mode Parent : passer le sélecteur en paramètre
      cy.verifyText('Products', '.title')
    })

    it('devrait vérifier le texte en mode Child', () => {
      // Mode Child : chaîner après un élément
      cy.get('.title').verifyText('Products')
    })

    it('devrait vérifier le texte d\'un produit en mode Child', () => {
      cy.get('.inventory_item').first().verifyText('Sauce Labs Backpack')
    })

    it('devrait vérifier le prix en mode Parent', () => {
      cy.verifyText('$29.99', '.inventory_item_price')
    })

  })

  // =============================================
  // TEST COMBINÉ : Utiliser toutes les commandes
  // =============================================
  describe('Combinaison des commandes', () => {

    it('devrait faire un parcours complet', () => {
      // Login avec commande Parent
      cy.login('standard_user', 'secret_sauce')

      // Vérifier le titre avec commande Dual (mode Parent)
      cy.verifyText('Products', '.title')

      // Ajouter au panier avec commande Child
      cy.get('.inventory_item').first().addToCart()

      // Vérifier le panier avec commande Dual (mode Child)
      cy.get('.shopping_cart_badge').verifyText('1')

      // Aller au panier
      cy.get('.shopping_cart_link').click()

      // Vérifier le produit dans le panier
      cy.get('.cart_item').first().verifyText('Sauce Labs Backpack')
    })

  })

})
