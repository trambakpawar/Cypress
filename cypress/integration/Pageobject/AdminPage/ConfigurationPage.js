/// <reference types="Cypress" />

const testmailcheckbox = "#emailConfigurationForm_chkSendTestEmail"
const testmailtextbox = "#emailConfigurationForm_txtTestEmail"
const emailpage = "#menu_admin_listMailConfiguration"
const editbutton = "#editBtn"
const adminpage = "#menu_admin_viewAdminModule > b"
const configpage = "#menu_admin_Configuration"
const savebutton = "#editBtn"
const admindata = require("../../../fixtures/UserData/AdminPage.json")

export class config {

    configpage() {
        cy.get(adminpage).click({ force: true })
        cy.get(configpage).click({ force: true })
    }

    editemail() {
        cy.get(emailpage).click({ force: true })
        cy.get(editbutton).click()

    }

    submitmail() {
        cy.get(testmailcheckbox).check()
        cy.get(testmailtextbox).type(admindata.mail)
        cy.get(savebutton).click()

    }

}