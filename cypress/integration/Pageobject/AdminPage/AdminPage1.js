import { admin } from "./AdminPage"
// skills page
const qualificationtab = "#menu_admin_Qualifications"
const skillspage = "#menu_admin_viewSkills"
const skillname = "#skill_name"
const skilldesc = "#skill_description"
const deletecheck = ":nth-child(17) > .check > .checkboxAtch"
const deletebutton = "#btnDel"
// education page
const education = "#menu_admin_viewEducation"
const addbutton = "#btnAdd"
const level = "#education_name"
const savebutton = "#btnSave"

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
        cy.contains('tr', 'Testing').find('input').check()
        cy.get(deletebutton).click()
    }

    addeducation() {
        cy.get(education).click({ force: true })
        cy.get(addbutton).click()
        cy.get(level).type(admindata.level)
        cy.get(savebutton).click()

    }

    deleteedu() {
        cy.get(education).click({ force: true })
        cy.contains('tr', 'Diploma in Computer Engineering').find('input').check()
        cy.get(deletebutton).click()
    }
}