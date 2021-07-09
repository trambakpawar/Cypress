const emptrackerpage = "#menu_performance_viewEmployeePerformanceTrackerList"
const addbutton = "#btnAdd"
const log = "#addperformanceTrackerLog_log"
const achievement = "#addperformanceTrackerLog_achievement"
const comment = "#addperformanceTrackerLog_comment"
const savebutton = "#saveBtn"
const track = require("../../../fixtures/UserData/PerformancePage.json")

export class tracker {

    trackerpage() {
        cy.get(emptrackerpage).click({ force: true })
    }

    viewemp() {
        cy.contains(track.supervisorname).should("be.visible").click()
    }
    addemployee() {
        if (cy.contains("Add")) {
            cy.get(addbutton).click()
            cy.get(log).type(track.log)
            cy.get(achievement).select(track.achievement)
            cy.get(comment).type(track.comment)
            cy.get(savebutton).click()
        }

    }
}
