import { loginpage } from "../../Pageobject/LoginPage";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { leave } from "../../Pageobject/Leave"
const lp = new loginpage()
const lv = new leave()
const leave_days = '#assignleave_partialDays'


Given(/^I login into the system and I Click on the Leave Page$/, function () {
    lp.login()
    lv.leavepage()
});

When(/^I Click on assign leave page and I fill the data$/, function () {
    lv.assignleave()
    lv.filldata()
    cy.wait(1000)
    cy.get(leave_days).select("None")
    lv.assignbutton()
});

Then(/^Leave assigned message get displayed$/, function () {
    lv.confirmbutton()
    cy.get("#content").contains("Successfully Assigned")
    cy.screenshot()
});


When(/^I click on the leave list page and search the employee$/, function () {
    lv.listpage()
    lv.searchemp()
});

Then(/^Employee name should get displayed$/, function () {
    cy.get("#content").contains("Haq")
    cy.screenshot()
});