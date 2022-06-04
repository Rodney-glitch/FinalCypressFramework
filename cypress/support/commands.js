import LoginPage from "../pageObjects/client/LoginPage";

const loginPage = new LoginPage();

Cypress.Commands.add('openUrl', ()=>{
    cy.visit(Cypress.env('stagingUrl'))
})

Cypress.Commands.add('login', (instCode, username, password)=>{
    loginPage.institutionCodeField.clear().type(instCode)
    loginPage.usernameField.clear().type(username)
    loginPage.passwordField.clear().type(password, {log:false})
    loginPage.loginBtn.click()
})
