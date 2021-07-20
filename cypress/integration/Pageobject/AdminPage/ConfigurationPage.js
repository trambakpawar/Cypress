/// <reference types="Cypress" />

const testmailcheckbox = "#emailConfigurationForm_chkSendTestEmail"
const testmailtextbox = "#emailConfigurationForm_txtTestEmail"
const emailconfigpage = "#menu_admin_listMailConfiguration"
const editbutton = "#editBtn"
const adminpage = "#menu_admin_viewAdminModule > b"
const configpage = "#menu_admin_Configuration"
const savebutton = "#btnSave"
const emailsubpage = "#menu_admin_viewEmailNotification"
const editbutton1 = "#btnEdit"
// localization page
const localizationpage = "#menu_admin_localization"
const language = "#localization_dafault_language"
const checkbox = "#localization_use_browser_language"
const dateformat = "#localization_default_date_format"
// langauge packges page
const languagepage = "#menu_admin_languagePackage"
const addbutton = "#btnAdd"
const selectlanguage = "#addLanguagePackage_name"

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
        cy.get(editbutton).click()

    }
    subsribemail() {
        cy.get(emailsubpage).click({ force: true })
        cy.get(editbutton1).click()
    }

    selectnotifications() {
        cy.get('[type="checkbox"]').not('[disabled]')
            .check().should('be.checked')
        cy.get(savebutton).click()
    }

    localization() {
        cy.get(localizationpage).click({ force: true })
        cy.get(savebutton).click()
    }

    selectlanguage() {
        cy.get(language).select(admindata.langauge)
        cy.get(checkbox).check()
        cy.get(dateformat).select(admindata.date)
        cy.get(savebutton).click()
    }

    packagepage() {
        cy.get(languagepage).click({ force: true })
        cy.get(addbutton).click()
    }

    addlangauge() {
        cy.get(selectlanguage).select(admindata.langauge1)
        cy.get(savebutton).click()
    }

    downaloadlangauge() {
        cy.get(languagepage).click({ force: true })
        cy.contains('tr', admindata.langauge1).find('a').eq(1).click()
        cy.reload()
    }
}