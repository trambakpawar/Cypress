const managereviewspage = "#menu_performance_ManageReviews"
const managereviews = "#menu_performance_searchPerformancReview"
const employeenamesearch = "#performanceReview360SearchForm_employeeName"
const searchbutton = "#btnSearch"
const addbutton = "#btnAdd"
const employeesearch = "#saveReview360Form_employee"
const supervisorname = "#saveReview360Form_supervisorReviewer"
const startdate = "#saveReview360Form_workPeriodStartDate"
const enddate = "#saveReview360Form_workPeriodEndDate"
const duedate = "#saveReview360Form_dueDate"
const savebutton = "#saveBtn"
const activatebutton = "#activateBtn"
const lableclick = ':nth-child(2) > .lableValue'
const reviwelistpage = "#menu_performance_searchEvaluatePerformancReview"
const employeename1 = "#evaluatePerformanceReview360SearchForm_employeeName"
const reviewsearchbutton = "#searchBtn"

const evaluate = "#resultTable > tbody > tr > td:nth-child(7) > a"
const per = require("../../../fixtures/UserData/PerformancePage.json")

export class reviews {

    managereviewspage() {
        cy.get(managereviewspage).click({ force: true })
    }
    managereviewstab() {
        cy.get(managereviews).click({ force: true })
    }

    searchemployee() {
        cy.get(employeenamesearch).type(per.employeename)
        cy.get(searchbutton).click()

    }
    addbutton() {
        cy.get(addbutton).click()
        cy.wait(1000)
    }
    addemployee() {

        cy.get(employeesearch).type(per.employeesearch).type('{enter}')
        cy.get(supervisorname).type(per.supervisorname)
        cy.get(startdate).type(per.startdate)
        cy.get(lableclick).click()
        cy.get(enddate).type(per.enddate)
        cy.get(lableclick).click()
        cy.get(duedate).type(per.duedate)
        cy.get(lableclick).click()
        cy.get(activatebutton).click()
        cy.get(savebutton).click()
    }

    reviwelistpage() {
        cy.get(reviwelistpage).click({ force: true })
    }
    reviewsearchemployee() {
        cy.get(employeename1).type(per.reviewemployeesearch)
        cy.get(reviewsearchbutton).click()
    }

    evaluatebutton() {
        cy.get(evaluate).click()
    }
}