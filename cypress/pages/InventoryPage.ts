// cypress/pages/InventoryPage.ts

export class InventoryPage {
    // ═══════════════════════════════════════════════════════════
    // SELECTORS
    // ═══════════════════════════════════════════════════════════
    
    get inventoryItems() { 
        return cy.get('.inventory_item') 
    }
    
    get sortDropdown() { 
        return cy.get('[data-test="product-sort-container"]') 
    }

    // ═══════════════════════════════════════════════════════════
    // ACTIONS
    // ═══════════════════════════════════════════════════════════
    
    /**
     * Ajouter un produit au panier par son nom
     */
    addProductToCart(productName: string): void {
        cy.contains('.inventory_item', productName)
            .find('button[id^="add-to-cart"]')
            .click()
    }

    /**
     * Retirer un produit du panier depuis la page inventaire
     */
    removeProductFromCart(productName: string): void {
        cy.contains('.inventory_item', productName)
            .find('button[id^="remove-"]')
            .click()
    }

    /**
     * Trier les produits
     */
    sortBy(option: 'az' | 'za' | 'lohi' | 'hilo'): void {
        this.sortDropdown.select(option)
    }

    /**
     * Vérifier qu'on est sur la page inventaire
     */
    verifyPageLoaded(): void {
        cy.url().should('include', '/inventory.html')
        this.inventoryItems.should('have.length.at.least', 1)
    }
}

export const inventoryPage = new InventoryPage()