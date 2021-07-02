const leavepage = "#menu_leave_assignLeave"
const assignpage = "#menu_leave_viewLeaveModule > b"
const empname = "#assignleave_txtEmployee_empName"
const leavetype = "#assignleave_txtEmployee_empName"
const startdate = "#assignleave_txtFromDate"
const lastdate = "#assignleave_txtToDate"
const comment = "#assignleave_txtComment"
const assignbutton = "#assignBtn"
const confirmbutton = '#confirmOkButton'
const label = "#frmLeaveApply > fieldset > ol > li:nth-child(4) > img"
const label1 = ':nth-child(5) > label'
const leavedata = require("../../fixtures/UserData/Leavepage.json")

export class leave {
    assignleave() {
        cy.get(leavepage).click({ force: true })
    }

    leavepage() {
        cy.get(assignpage).click({ force: true })
    }

    empname() {
        cy.get(empname).type(leavedata.employeename)
    }

    leavetype() {
        cy.get(leavetype).select(leavedata.leavetype)
    }

    fromdate() {
        cy.get(startdate).type(leavedata.startdate)
        cy.get(label1).click()

    }

    todate() {
        cy.get(endate).clear()
        cy.get(endate).type(leavedata.enddate)
        cy.get(label).click()
    }

    comment() {
        cy.get(comment).type(leavedata.comment)
    }

    assignbutton() {
        cy.get(assignbutton).click()
    }

    confirmbutton() {
        cy.get(confirmbutton).click()
    }
    filldata() {
        cy.get(empname).type(leavedata.employeename)
        cy.get(leavetype).select(leavedata.leavetype)
        this.fromdate()
        this.todate()
        cy.get(comment).type(leavedata.comment)

    }
}