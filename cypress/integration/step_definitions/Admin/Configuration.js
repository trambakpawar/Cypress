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

When(/^I click on email subscription and click on the edit button$/, function () {
    cf.subsribemail()
});

When(/^I select the notification types and click on save$/, function () {
    cf.selectnotifications()
});

Then(/^sucessfully saved message get display$/, function () {
    cy.get('.message').contains("Successfully Saved")
    cy.screenshot()
});


When(/^I click on localization and click on the edit button$/, function () {
    cf.localization()
});

When(/^I select the language types and date format click on save$/, function () {
    cf.selectlanguage()
});

Then(/^Sucessfully saved message get display$/, function () {
    cy.get('.message').contains("Successfully Saved")
    cy.screenshot()
});


When(/^I click on language packages and click on add button$/, function () {
    cf.packagepage()
});

When(/^I select the language types and click on save button$/, function () {
    cf.addlangauge()
});

Then(/^Langauge Sucessfully saved message get display$/, function () {
    cy.get('.message').contains("Successfully Saved")
    cy.screenshot()
});

When(/^I click on language packages and click on download button$/, function () {
    cf.downaloadlangauge()
    
});

Then(/^Langauge Sucessfully get downloaded$/, function () {
    cy.readFile("F:\CypressDemo\cypress\downloads\i18n-mr_IN.zip")
});