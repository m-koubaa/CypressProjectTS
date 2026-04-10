describe('Actions de la souris', () => {
    

    describe('Devrait tester action de survol', () => {

        beforeEach(() => {
            cy.visit('https://the-internet.herokuapp.com/hovers')
        });
        it('Devrait afficher le nom du user au survol de limage', () => {
            // cy.get('.figure').first().trigger('mouseover') 
            // declenche un evenement javascript onmouseover, onclick, ...
            // ne s'applique pas sur css button:hover{background-color: red;}
            // le navigateur ne sait pas que la souris est passee
            cy.get('.figure').first().realHover() 
            cy.get('.figcaption').first()
                .should('be.visible')
                .find('h5')
                .should('have.text','name: user1')

            
        });

        it('Devrait cliquer sur le lien Profile', () => {
            cy.get('.figure').first().realHover() 
            cy.get('.figcaption').first().should('be.visible').find('a').click()
            cy.url().should('include','users/1')
        });
        
    });

    describe.only('Devrait tester Drag and Drop', () => {
        beforeEach(() => {
            cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        });

        it.only('drag and drop with datatransfer', () => {
            
            const dataTransfer = new window.DataTransfer()
            cy.get('#column-a').trigger('dragstart', {dataTransfer})
            cy.get('#column-b')
                .trigger('dragover', {dataTransfer})
                .trigger('drop', {dataTransfer})
            cy.get('#column-a').trigger('dragend')

            cy.get('#column-a').find('header').should('contain','B')
            cy.get('#column-b').find('header').should('contain','A')

        });

        it('drag and drop with real', () => {
            
            
            cy.get('#column-a').realMouseDown()
            cy.get('#column-b').realHover().realMouseUp()
            

            cy.get('#column-a').find('header').should('contain','B')
            cy.get('#column-b').find('header').should('contain','A')

        });

        it('devrait déplacer A vers B', () => {
            cy.get('#column-a').drag('#column-b', { force: true })
            cy.get('#column-a header').should('have.text', 'B')
            cy.get('#column-b header').should('have.text', 'A')
  })


        // cy.get('#source').realMouseDown()
        // cy.get('#target').realMouseMove().realMouseUp()
        
    });

});