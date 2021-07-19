import { loginpage } from "../../Pageobject/LoginPage";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { config } from "../../Pageobject/AdminPage/ConfigurationPage"

const cf = new config()
const lp = new loginpage()
Given(/^When I login into system and go to configuration page$/, function () {
    lp.login()
    cf.configpage()

});

When(/^I click on email configuration and click on the edit button$/, function () {
    cf.editemail()
});

When(/^I select the test mail and submuit the mail$/, function () {
    cf.submitmail()
});

Then(/^sucessfully saved message get displayed$/, function () {
    cy.contains("Successfully Saved. Test Email Sent").should("eq", "Successfully Saved. Test Email Sent")
    cy.screenshot()
});