/// <reference types="Cypress" />
// job title page
const adminpage = "#menu_admin_viewAdminModule > b"
const jobmenu = "#menu_admin_Job"
const jobtitlepage = "#menu_admin_viewJobTitleList"
const addbutton = "#btnAdd"
const deletebutton = "#btnDelete"
const jobtitle = "#jobTitle_jobTitle"
const jobdesc = "#jobTitle_jobDescription"
const jobspecif = "#jobTitle_jobSpec"
const jobnote = "#jobTitle_note"
const savebutton = "#btnSave"
const filename = "goku.png"
const confirmdelete = "#dialogDeleteBtn"
// workshift page
const workshiftpage = "#menu_admin_workShift"
const shiftname = "#workShift_name"
const fromtime = "#workShift_workHours_from"
const totime = "#workShift_workHours_to"
const empname = "#workShift_availableEmp"
const addemp = "#btnAssignEmployee"



const jobdata = require("../../../fixtures/UserData/Jobs.json")

export class job {
    jobmenu() {
        cy.get(adminpage).click({ force: true })
        cy.get(jobmenu).click({ force: true })
    }

    jobtitle() {
        cy.get(jobtitlepage).click({ force: true })
    }

    workshiftpage() {
        cy.get(workshiftpage).click({ force: true })
    }

    addjob() {
        cy.get(addbutton).click()
        cy.get(jobtitle).type(jobdata.jobtitle)
        cy.get(jobdesc).type(jobdata.jobdescri)
        cy.get(jobspecif).attachFile(filename)
        cy.get(jobnote).type(jobdata.note)
        cy.get(savebutton).click()
    }

    deletejob() {
        cy.contains('tr', jobdata.jobtitle).find('input').check()
        cy.get(deletebutton).click()
        cy.get(confirmdelete).click()
    }

    addworkshift() {
        cy.get(addbutton).click()
        cy.get(shiftname).type(jobdata.shiftname)
        cy.get(fromtime).type(jobdata.fromtime)
        cy.get(totime).type(jobdata.totime)
        cy.get(empname).select(jobdata.empname)
        cy.get(addemp).click()
        cy.get(empname).select(jobdata.empname1)
        cy.get(addemp).click()
        cy.get(savebutton).click()
    }

    deleteworkshift() {
        cy.contains('tr', jobdata.shiftname).find('input').check()
        cy.get(deletebutton).click()
        cy.get(confirmdelete).click()

    }
}
