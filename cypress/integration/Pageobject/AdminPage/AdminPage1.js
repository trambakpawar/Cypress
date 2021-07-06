import { admin } from "./AdminPage"

const qualificationtab = "#menu_admin_Qualifications"
const skillspage = "#menu_admin_viewSkills"
const skillname = "#skill_name"
const skilldesc = "#skill_description"
const deletecheck = ":nth-child(17) > .check > .checkboxAtch"
const deletebutton = "#btnDel"
const admindata = require("../../../fixtures/UserData/AdminPage.json")
const ad = new admin()

export class admin1 {

    qualificationtab() {
        cy.get(qualificationtab).click({ force: true })
    }

    skillspage() {
        cy.get(skillspage).click({ force: true })
    }
    addskill() {
        ad.addbutton()
        cy.get(skillname).type(admindata.skill)
        cy.get(skilldesc).type(admindata.descrption)
        ad.savebutton()

    }

    deleteskill() {
        cy.get(deletecheck).check()
        cy.get(deletebutton).click()
    }
}