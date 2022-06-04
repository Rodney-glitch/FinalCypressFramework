import LoginPage from "../pageObjects/client/LoginPage";

const  loginPage = new LoginPage();

Cypress.Commands.add('checkAlert', (message)=>{
    loginPage.toastContainer.should('be.visible').then($el=>{
        expect($el.text()).to.contain(message)
    })
    loginPage.toastClose.click()
})