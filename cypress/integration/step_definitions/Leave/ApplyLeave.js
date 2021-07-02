import { loginpage } from "../../Pageobject/LoginPage";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { leave } from "../../Pageobject/Leave"
const lp = new loginpage()
const lv = new leave()

Given(/^I login into the system$/, function () {
    lp.login()
});


When(/^I Click on the Leave Page$/, function () {
    lv.leavepage()
});

When(/^I Click on assign leave page$/, function () {
    lv.assignleave()
});

When(/^I fill the data$/, function () {
    lv.filldata()
});

When(/^I click on assign button$/, function () {
    cy.get('#assignleave_partialDays').select("None")
    lv.assignbutton()
});

Then(/^Leave assigned message get displayed$/, function () {
    lv.confirmbutton()
    cy.contains("Successfully Assigned")
});