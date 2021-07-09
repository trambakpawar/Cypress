
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
// admin- organization page
const organizationtab = "#menu_admin_Organization"
const ginfo = "#menu_admin_viewOrganizationGeneralInformation"
const editbutton = "#btnSaveGenInfo"
const savebutton1 = "#btnSaveGenInfo"
const city = "#organization_city"
const locations = "#menu_admin_viewLocations"
const country = "#searchLocation_country"
const city1 = "#searchLocation_city"
const searchbutton1 = "#btnSearch"
const deletebutton = "#btnDelete"
const confirmdelete = "#dialogDeleteBtn"
const locationcheckbox = "#ohrmList_chkSelectAll"
const structure = "#menu_admin_viewCompanyStructure"
const addbutton = "#treeLink_addChild_11"
const deletebutton1 = "#dialogYes"

// add unit form
const unitid = "#txtUnit_Id"
const unitname = "#txtName"
const description = "#txtDescription"
const editbutton1 = "#btnEdit"
const deletenode = "#treeLink_delete_22"
const admindata = require("../../../fixtures/UserData/AdminPage.json")
export class admin {

    adminbutton() {
        cy.get(dashboard).contains("Dashboard")
        cy.get(adminpage).click({ force: true })
    }

    searchuser() {
        cy.get(username).type(admindata.username)
    }

    searchuser1() {
        cy.get(username).type(admindata.username3)
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
        cy.get(buttonsave).click({ force: true })
    }

    userdatafill() {
        cy.get(userrole).select(admindata.userrole)
        cy.get(empname).type(admindata.employeename)
        cy.get(username1).type(admindata.username3)
        cy.get(status).select(admindata.status)
        cy.get(password).type(admindata.password)
        cy.get(confirmpassword).type(admindata.confirmpassword)
    }

    organizationtab() {
        cy.get(organizationtab).click({ force: true })
    }
    ginfo() {
        cy.get(ginfo).click({ force: true })
    }
    editbutton() {
        cy.get(editbutton).click()
    }
    filldata() {
        cy.get(city).clear()
        cy.get(city).type(admindata.city)
        cy.get(savebutton1).click()
    }

    location() {
        cy.get(locations).click({ force: true })
    }
    searchlocation() {
        cy.get(city1).type(admindata.city1)
        cy.get(country).select(admindata.country)
        cy.get(searchbutton1).click()
    }

    deletebutton() {
        cy.get(deletebutton).click()

    }
    confirmdelete() {
        cy.get(confirmdelete).click()
    }

    checklocation() {
        cy.get(locationcheckbox).check()
    }

    structurepage() {
        cy.get(structure).click({ force: true })
    }

    addposition() {
        cy.get(editbutton1).click()
        cy.get(addbutton).click()
    }
    addunit() {
        cy.get(unitid).type(admindata.unitid)
        cy.get(unitname).type(admindata.unitname)
        cy.get(description).type(admindata.descrption)
        cy.get(buttonsave).click()
    }

    deleteunit() {
        cy.get(editbutton1).click()
        cy.get(deletenode).click()
        cy.get(deletebutton1).click()
    }
}
