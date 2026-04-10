describe('check UI Elements', () => {

    it('Radio Buttons', () => {

        cy.visit('https://practice.expandtesting.com/radio-buttons')
        // Verifier que le bouton radio blue est visible
        cy.get('#blue').should('be.visible')
        
        // Cocher blue et verifier qu'il est coché
        cy.get('#blue').should('be.visible').check().should('be.checked')
        
        // Verifier que Red n'est pas coché
        cy.get('#red').should('be.visible').should('not.be.checked')
        
    });

    it('Checkboxes', () => {

        cy.visit('https://practice.expandtesting.com/checkboxes')
        
        // Verifier que checkbox 1 est visible
        cy.get('#checkbox1').should('be.visible')
        
        
        // Cocher et verifier
        cy.get('#checkbox1').should('be.visible').check().should('be.checked')
        
        // Decocher et verifier
        cy.get('#checkbox1').uncheck().should('not.be.checked')
        

        // Cocher tout
        cy.get('.form-check-input').check()
        cy.get('#checkbox1').should('be.checked')
        cy.get('#checkbox2').should('be.checked') 

        // Cocher first et last
        // cy.get('.form-check-input').first().check().should('be.checked')
        // cy.get('.form-check-input').last().check().should('be.checked')
        // cy.get('.form-check-input').eq(1).check().should('be.checked')
        
        
    });

    it.only('dropdown with select', () => {

        cy.visit('https://practice.expandtesting.com/dropdown')
        // Selectionner France et verifier que sa valeur est FR
        cy.get('#country').select('France').should('have.value','FR')
        
    });
    
});