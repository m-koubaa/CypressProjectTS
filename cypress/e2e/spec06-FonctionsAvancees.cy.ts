describe('Test des fonctions avancees', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })

    it('fonction then', () => {
        cy.get('.app_logo').then(($elem)=>{
            let label:string = $elem.text()
            expect(label.toUpperCase()).to.be.equal('SWAG LABS')
        })
    
    });

    it('fonction then avec prop', () => {
        cy.get('a').first().then(($elem)=>{
            let link  = $elem.prop('href')
            cy.visit(link)
        })
    });

    it('fonction then chainee', () => {
        let total:number
        cy.get('.inventory_item_price').first().then(($price)=>{
            let val:number = parseFloat($price.text().replace('$',''))
            return val
        }).then(($valeur)=>{
            total = $valeur
            cy.log(`total = ${total}`)
        })
    });

    it('fonction then avec for', () => {
        cy.get('.inventory_item_price').then(($list)=>{
            //console.log(`${$list}`)
    
            for (let index = 0; index < $list.length; index++) {
                //cy.log(`${$list[index]}`)
                const elem1 = $list[index].textContent // objet DOM natif
                const elem2 = $list.eq(index).text() // objet JQuery
                //cy.log(`${$list.eq(index)}`)
                cy.log(`element = ${elem1}  ${elem2}`)
            }
        });
    });

    
    it('fonction then avec each', () => {
        cy.get('.inventory_item_price').then(($list)=>{
       
            $list.each((indice, price)=>{
            
                cy.log(`price_each : ${price.textContent}`)
            })
        });
            
  
    });

    it('fonction invoke', () => {
        cy.get('.app_logo').invoke('text').should('eq','Swag Labs')
    });

    it.only('fonction invoke avec val', () => {
        cy.get('.product_sort_container').select('Name (A to Z)').invoke('val').should('eq','az')
    });

    it('fonction within', () => {
        cy.get('#inventory_container').within(()=>{
            cy.get('.inventory_item').should('have.length',6)
        })
        
    });

    it('fonction wrap', () => {
       cy.get('.app_logo').then(($elem)=>{
            cy.wrap($elem).should('have.text','Swag Labs')
        }) 
    });

    it('fonction wrap. avec each', () => {
        cy.get('.inventory_item').each(($item, index, $list)=>{
            cy.wrap($item).within(()=>{
                cy.get('img').should('exist').and('be.visible')
                cy.get('.inventory_item_price').should('have.length',1)
                    .invoke('text')
                    .should('include','$')
                    .should('contain','$')
            })

        })
    });

});

    