describe('check UI Elements', () => {

    it('Radio Buttons', () => {

        cy.visit('https://practice.expandtesting.com/radio-buttons')
        // Verifier que le bouton radio blue est visible
        
        // Cocher blue et verifier qu'il est coché
        
        // Verifier que Red n'est pas coché
        
    });

    it.only('Checkboxes', () => {

        cy.visit('https://practice.expandtesting.com/checkboxes')
        
        // Verifier que checkbox 1 est visible
        
        // Cocher et verifier
        
        // Decocher et verifier
        

        // Cocher tout
        

        // Cocher first et last
        cy.get('.form-check-input').first().check().should('be.checked')
        cy.get('.form-check-input').last().check().should('be.checked')
        cy.get('.form-check-input').eq(1).check().should('be.checked')
        
        
    });

    it('dropdown with select', () => {

        cy.visit('https://practice.expandtesting.com/dropdown')
        // Selectionner France et verifier que sa valeur est FR
        
    });
    
});