// cypress/pages/LoginPage.ts

export class LoginPage {
    // ═══════════════════════════════════════════════════════════
    // SELECTORS
    // ═══════════════════════════════════════════════════════════
    
    get usernameInput() { 
        return cy.get('[data-test="username"]') 
    }
    
    get passwordInput() { 
        return cy.get('[data-test="password"]') 
    }
    
    get loginButton() { 
        return cy.get('[data-test="login-button"]') 
    }
    
    get errorMessage() { 
        return cy.get('[data-test="error"]') 
    }

    // ═══════════════════════════════════════════════════════════
    // ACTIONS
    // ═══════════════════════════════════════════════════════════
    
    /**
     * Visiter la page de login
     */
    visit(): void {
        cy.visit('https://www.saucedemo.com')
    }

    /**
     * Se connecter avec username et password
     */
    login(username: string, password: string): void {
        this.usernameInput.clear().type(username)
        this.passwordInput.clear().type(password)
        this.loginButton.click()
    }

    /**
     * Vérifier le message d'erreur
     */
    verifyErrorMessage(message: string): void {
        this.errorMessage
            .should('be.visible')
            .and('contain', message)
    }
}

export const loginPage = new LoginPage()