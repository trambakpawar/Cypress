const leavepage = "#menu_leave_assignLeave"
const assignpage = "#menu_leave_viewLeaveModule > b"
const empname = "#assignleave_txtEmployee_empName"
const leavetype = "#assignleave_txtLeaveType"
const startdate = "#assignleave_txtFromDate"
const enddate = "#assignleave_txtToDate"
const comment = "#assignleave_txtComment"
const assignbutton = "#assignBtn"
const confirmbutton = '#confirmOkButton'
const label = "#frmLeaveApply > fieldset > ol > li:nth-child(4) > img"
const label1 = ':nth-child(5) > label'
const leavedata = require("../../fixtures/UserData/Leavepage.json")

//leave lis page
const fromdate = "#calFromDate"
const todate = "#calToDate"
const employeename = "#leaveList_txtEmployee_empName"
const subunit = "#leaveList_cmbSubunit"
const pastemp = "#leaveList_cmbWithTerminated"
const listpage = "#menu_leave_viewLeaveList"
const searchbutton = "#btnSearch"
const lable2 = "#frmFilterLeave > fieldset > ol > li:nth-child(2) > label"

export class leave {
    assignleave() {
        cy.get(leavepage).click({ force: true })
    }

    leavepage() {
        cy.get(assignpage).click({ force: true })
    }

    listpage() {
        cy.get(listpage).click({ force: true })
    }

    searchemp() {
        cy.get(fromdate).clear().type("2020-07-12").click()
        cy.get(lable2).click()
        cy.get(todate).clear().type("2021-07-12").click()
        cy.get(lable2).click()
        cy.get(employeename).type(leavedata.name)
        cy.get(subunit).select("All")
        cy.get(pastemp).check()
        cy.get(searchbutton).click()
    }

    fromdate() {
        cy.get(startdate).type(leavedata.startdate)
        cy.get(label1).click()
    }

    todate() {
        cy.get(enddate).clear()
        cy.get(enddate).type(leavedata.enddate)
        cy.get(label).click()
    }


    assignbutton() {
        cy.get(assignbutton).click()
    }

    confirmbutton() {
        cy.get(confirmbutton).click()
    }

    filldata() {
        cy.get(empname).type(leavedata.employeename)
        cy.get(leavetype).select(leavedata.type)
        this.fromdate()
        this.todate()
        cy.get(comment).type(leavedata.comment)
    }
}