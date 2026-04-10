describe('Fixture JSON', () =>{

    // #2-2
    let globalVar;
    before(() => {
        cy.fixture('user.json').then((data)=>{ 
            globalVar = data
           });
        cy.fixture('user.json').as('useralias')
    })

    // #1
    it('One user login', () => {

        cy.visit('https://demo.guru99.com/test/newtours/index.php')
        cy.get('input[name="userName"]').type('mercury')
        cy.get('input[name="password"]').type('mercury')
        cy.get('input[name="submit"]').click()

        cy.get('table > tbody > tr:nth-child(1) > td > h3').should('have.text','Login Successfully')
        
    });

    // #2-1
    it('data driven test', () => {

        cy.visit('https://demo.guru99.com/test/newtours/index.php')
        cy.fixture('user.json').then((data)=>{

            cy.get('input[name="userName"]').type(data.username)
            cy.get('input[name="password"]').type(data.password)
            cy.get('input[name="submit"]').click()

            cy.get('table > tbody > tr:nth-child(1) > td > h3').should('have.text',data.message)

        })
        
    });

    

    // #2-2 (declaration de globalVar en haut)
    it.only('data driven with suite level', () => {

        cy.visit('https://demo.guru99.com/test/newtours/index.php')
        cy.get('input[name="userName"]').type(globalVar.username)
        cy.get('input[name="password"]').type(globalVar.password)
        cy.get('input[name="submit"]').click()

        cy.get('table > tbody > tr:nth-child(1) > td > h3').should('have.text',globalVar.message)
        
    });


    
    // #3
    it('data driven test with multiple users', () => {

        cy.fixture('users2.json').then((data)=>{
        
            data.forEach(element =>{
                cy.visit('https://demo.guru99.com/test/newtours/index.php')
                cy.get('input[name="userName"]').type(element.username)
                cy.get('input[name="password"]').type(element.password)
                cy.get('input[name="submit"]').click()

                cy.get('table > tbody > tr:nth-child(1) > td > h3')
                .should('have.text',element.message)
            })
            

        })
        
    });


    
});