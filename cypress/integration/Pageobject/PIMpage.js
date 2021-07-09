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


export class addemp {
    pimpage() {
        cy.get(pimpage).click()
    }

    addemppage() {
        cy.get(addemployee).click({ force: true })
    }

    firstform() {
        cy.get(firstname).type("Trambak")
        cy.get(middlename).type("Ramesh")
        cy.get(lastname).type("Pawar")
        cy.get(empid).clear()
        cy.get(empid).type("4578")
        const filename = "1.jpg"
        cy.get(photo).attachFile(filename)
    }

    checklogin() {
        cy.get(logincheckbox).check()
    }

    secondform() {
        cy.get(username).type("Trambak19")
        cy.get(password).type("12345678")
        cy.get(repassword).type("12345678")
        cy.get(status).select("Enabled")
    }

    savebutton() {
        cy.get(savebutton).click()
    }

    emppage() {
        cy.get(employeepage).click({ force: true })
    }

    search() {
        cy.wait(1000)
        cy.get(empnamesearch).type("Trambak Ramesh Pawar")
    }
    searchbutton1() {
        cy.get(searchbutton).click()
    }

    viewuser() {
        cy.get("#resultTable > tbody > tr > td:nth-child(3) > a").contains("Trambak Ramesh")
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