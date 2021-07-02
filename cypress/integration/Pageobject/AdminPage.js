
//search user page
const adminpage = '#menu_admin_viewAdminModule > b'
const username = '#searchSystemUser_userName'
const buttonsearch = "#searchBtn"
const buttonadd = "#btnAdd"
const buttonsave = "#btnSave"
const dashboard = '#menu_dashboard_index > b'
//add user page
const userrole = "#systemUser_userType"
const empname = "#systemUser_employeeName_empName"
const username1 = "#systemUser_userName"
const status = "#systemUser_status"
const password = "#systemUser_password"
const confirmpassword = "#systemUser_confirmPassword"

const admindata = require("../../fixtures/UserData/AdminPage.json")
export class admin {

    adminbutton() {
        cy.get(dashboard).contains("Dashboard")
        cy.get(adminpage).click({ force: true })
    }

    searchuser() {
        cy.get(username).type(admindata.username)
    }

    searchuser1() {
        cy.get(username).type(admindata.username1)
    }
    searchbutton() {
        cy.get(buttonsearch).click()
    }

    searchwronguser() {
        cy.get(username).type(admindata.username2)
    }

    addbutton() {
        cy.get(buttonadd).click()
    }

    savebutton() {
        cy.get(buttonsave).click()
    }

    userdatafill() {
        cy.get(userrole).select(admindata.userrole)
        cy.get(empname).type(admindata.employeename)
        cy.get(username1).type(admindata.username3)
        cy.get(status).select(admindata.status)
        cy.get(password).type(admindata.password)
        cy.get(confirmpassword).type(admindata.confirmpassword)
    }
}
