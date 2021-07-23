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
// module page
const modulepage = "#menu_admin_viewModules"
const directorymodule = "#moduleConfig_recruitment"
//Social Media Page
const socialpage = "#menu_admin_openIdProvider"
const type = "#openIdProvider_type"
const name = "#openIdProvider_name"
const url = "#openIdProvider_url"
const deletebutton = "#btnDelete"
const confirmdelete = "#dialogDeleteBtn"
const admindata = require("../../../fixtures/UserData/AdminPage.json")

export class config {

    configpage() {
        cy.get(adminpage).click({ force: true })
        cy.get(configpage).click({ force: true })
    }

    editemail() {
        cy.get(emailconfigpage).click({ force: true })
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

    moduledelete() {
        cy.get(modulepage).click({ force: true })
        cy.get(savebutton).click()
        cy.get(directorymodule).uncheck()
        cy.get(savebutton).click()
    }

    smapage() {
        cy.get(socialpage).click({ force: true })
        cy.get(addbutton).click()
    }

    providerform() {
        cy.get(type).select(admindata.type)
        cy.get(name).type(admindata.name)
        cy.get(url).type(admindata.url)
        cy.get(savebutton).click()
    }

    deleteprovider() {
        cy.get(socialpage).click({ force: true })
        cy.contains('tr', admindata.name).find('input').check()
        cy.get(deletebutton).click()
        cy.get(confirmdelete).click()
    }
}