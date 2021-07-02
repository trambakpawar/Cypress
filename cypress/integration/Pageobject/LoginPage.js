/// <reference types="Cypress" />
const url = "https://opensource-demo.orangehrmlive.com/index.php/dashboard"
const username = "#txtUsername"
const password = "#txtPassword"
const loginbutton = "#btnLogin"
const logindata = require("../../fixtures/UserData/LoginPage.json")


export class loginpage {
    visit1() {
        cy.visit(url)
    }

    setusername(username1) {

        cy.get(username).type(username1)
    }
    setpassword(password1) {
        cy.get(password).type(password1)
    }
    loginbutton() {
        cy.get(loginbutton).click()
    }

    login() {

        cy.visit(logindata.url).then(() => {
            cy.get(username).type(logindata.username)
        })
            .then(() => {
                cy.get(password).type(logindata.password)
            })
            .then(() => {
                cy.get(loginbutton).click()
            })

        cy.log("Login Successful")
    }
}





