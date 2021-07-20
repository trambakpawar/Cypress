// PIM Page
const pimpage = "#menu_pim_viewPimModule > b"
const addemployee = "#menu_pim_addEmployee"
const firstname = "#firstName"
const middlename = "#middleName"
const lastname = "#lastName"
const empid = "#employeeId"
const photo = "#photofile"
const logincheckbox = "#chkLogin"
const username = "#user_name"
const password = "#user_password"
const repassword = "#re_password"
const status = "#status"
const savebutton = "#btnSave"
const employeepage = "#menu_pim_viewEmployeeList"
const empnamesearch = '#empsearch_employee_name_empName'
const searchbutton = "#searchBtn"
const listecheckbox = "#ohrmList_chkSelectAll"
const deletebutton = "#btnDelete"
const confirmdelete = "#dialogDeleteBtn"

const pimdata = require("../../fixtures/UserData/PIMPage.json")

export class addemp {
    pimpage() {
        cy.get(pimpage).click()
    }

    addemppage() {
        cy.get(addemployee).click({ force: true })
    }

    firstform() {
        cy.get(firstname).type(pimdata.firstname)
        cy.get(middlename).type(pimdata.middlename)
        cy.get(lastname).type(pimdata.lastname)
        cy.get(empid).clear()
        cy.get(empid).type(pimdata.empid)
        const filename = "1.jpg"
        cy.get(photo).attachFile(filename)
    }

    checklogin() {
        cy.get(logincheckbox).check()
    }

    secondform() {
        cy.get(username).type(pimdata.username)
        cy.get(password).type(pimdata.password)
        cy.get(repassword).type(pimdata.confirmpassword)
        cy.get(status).select(pimdata.status)
    }

    savebutton() {
        cy.get(savebutton).click()
    }

    emppage() {
        cy.get(employeepage).click({ force: true })
    }

    search() {
        cy.wait(1000)
        cy.get(empnamesearch).type(pimdata.fullname)
    }
    searchbutton1() {
        cy.get(searchbutton).click()
    }

    viewuser() {
        cy.contains('tr', pimdata.firstname).find('input').check()
    }

    checkbox() {
        cy.get(listecheckbox).check()
    }
    delete() {
        cy.get(deletebutton).click()
        cy.wait(1000)
        cy.get(confirmdelete).click()
    }
}