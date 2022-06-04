const data = require("../../fixtures/data.json")
import LoginPage from "../../pageObjects/client/LoginPage";

const loginPage = new LoginPage();

const clientUsername = data.login.clientUsername
const clientPassword = data.login.clientPassword
const clientInstitutionCode = data.login.clientInstitutionCode
const invalidUsername = data.login.invalidUsername
const invalidPassword = data.login.invalidPassword
const invalidCode = data.login.invalidCode

describe('Login Module', ()=>{
    before('open Url', ()=>{
        cy.openUrl()
    })

    it('should validate that login page is visible', function () {
        cy.url().should('include', 'login')
        loginPage.logo.should('be.visible')
        loginPage.loginBtn.should('be.visible')
    });

    it('should validate that user cannot login with empty username and password', function () {
        loginPage.institutionCodeField.clear()
        loginPage.usernameField.clear()
        loginPage.passwordField.clear()
        loginPage.loginBtn.click()
        loginPage.alertBox.should('be.visible')
        loginPage.alertMessage.should('be.visible')
            .and('contain.text', 'Institution Code is required.')
        loginPage.closeAlert.click()
    });

    it('should validate that user cannot login with invalid details', function () {
        cy.login(invalidCode, invalidUsername, invalidPassword)
        cy.checkAlert('Invalid Institution Code')
    });
})