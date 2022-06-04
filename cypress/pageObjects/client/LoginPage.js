class LoginPage {
    get logo(){
        return cy.get('.image')
    }
    get loginBtn(){
        return cy.get('#login')
    }
    get institutionCodeField(){
        return cy.get('#institutionCode')
    }
    get usernameField(){
        return cy.get('#username')
    }
    get passwordField(){
        return cy.get('#password')
    }
    get alertBox(){
        return cy.get('.alert')
    }
    get alertMessage(){
        return cy.get('strong')
    }
    get closeAlert(){
        return cy.get('.close > span')
    }
    get toastContainer(){
        return cy.get('.Toastify__toast-body')
    }
    get toastClose(){
        return cy.get('svg')
    }
}

export default LoginPage;