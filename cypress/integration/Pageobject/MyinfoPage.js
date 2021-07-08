/// <reference types="Cypress" />
// peronal details page
const myninfopage = "#menu_pim_viewMyDetails > b"
const perosnal = "#sidenav > li.selected > a"
const firstname = "#personal_txtEmpFirstName"
const middlename = "#personal_txtEmpMiddleName"
const lastname = "#personal_txtEmpLastName"
const savebutton = "#btnSave"
const bloodgroup = "#frmEmpCustomFields > ol > li > select"
const editbutton = "#btnEditCustom"
const attachmentcheckbox = "#attachmentsCheckAll"
const deleteacttachment = "#btnDeleteAttachment"
const savebutton1 = '#btnSave'
const editcustombutton = "#btnEditCustom"
const myinfodata = require("../../fixtures/UserData/MyInfoPage.json")
export class myinfo {

    myinfotab() {
        cy.get(myninfopage).click()
    }

    peronaldclick() {
        cy.get(perosnal).click()
    }

    fillperonsonal() {
        cy.get(firstname).clear()
        cy.get(firstname).type(myinfodata.firstname)
        cy.get(middlename).clear()
        cy.get(middlename).type(myinfodata.middlename)
        cy.get(lastname).clear()
        cy.get(lastname).type(myinfodata.lastname)
        cy.get(savebutton).click()
    }

    customfield() {
        cy.get(bloodgroup).select(myinfodata.bloodgroup)
        cy.get(editbutton).click()
    }

    addattachment() {
        cy.get(attachmentcheckbox).check()
        cy.get(deleteacttachment).click()
    }

    editpd() {
        cy.get(savebutton1).click()
    }

    editcustom() {
        cy.get(editcustombutton).click()
    }

}