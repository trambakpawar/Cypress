/// <reference types="Cypress" />
//optional field page
const pimpage = "#menu_pim_viewPimModule > b"
const configpage = "#menu_pim_Configuration"
const optianlfield = "#menu_pim_configurePim"
const editbutton = "#btnSave"
const checkbox = "#configPim_chkShowTax"
// custom field page
const custompage = "#menu_pim_listCustomFields"
const addbutton = "#buttonAdd"
const fieldname = "#customField_name"
const screen = "#customField_screen"
const type = "#customField_type"
const savebtton = "#btnSave"
const deletebutton = "#buttonRemove"
const confirmdeletebutton = "#dialogDeleteBtn"
const pimdata = require("../../../fixtures/UserData/PIMPage.json")
// reporting page
const reportingpage = "#menu_pim_viewReportingMethods"
const addbutton1 = "#btnAdd"
const deletebutton1 = "#btnDel"
const name = "#reportingMethod_name"
// termination report page
const terminationpage = "#menu_pim_viewTerminationReasons"
const terminationname = "#terminationReason_name"


export class configuration {
    pimpage() {
        cy.get(pimpage).click({ force: true })
    }

    optianlfield() {

        cy.get(configpage).click({ force: true })
        cy.get(optianlfield).click({ force: true })

    }

    editinfo() {
        cy.get(editbutton).click()
        cy.get(checkbox).uncheck()
        cy.get(editbutton).click()
    }

    customfield() {
        cy.get(configpage).click({ force: true })
        cy.get(custompage).click({ force: true })
    }

    addfield() {
        cy.get(addbutton).click()
        cy.get(fieldname).type(pimdata.fieldname)
        cy.get(screen).select(pimdata.screen)
        cy.get(type).select(pimdata.type)
        cy.get(savebtton).click()
    }

    deletefield() {
        cy.contains('tr', pimdata.fieldname).find('input').eq(0).click()
        cy.get(deletebutton).click({ force: true })
        cy.get(confirmdeletebutton).click()
    }

    reportpage() {
        cy.get(configpage).click({ force: true })
        cy.get(reportingpage).click({ force: true })
    }

    addreport() {
        cy.get(addbutton1).click()
        cy.get(name).type(pimdata.reporting)
        cy.get(savebtton).click()
    }

    deletereport() {
        cy.contains('tr', pimdata.reporting).find('input').click()
        cy.get(deletebutton1).click()
    }
    reasonpage() {
        cy.get(configpage).click({ force: true })
        cy.get(terminationpage).click({ force: true })
    }

    addreason() {
        cy.get(addbutton1).click()
        cy.get(terminationname).type(pimdata.reason)
        cy.get(savebtton).click()
    }

    deletereason() {
        cy.contains("tr", pimdata.reason).find('input').check()
        cy.get(deletebutton1).click()

    }

}

