import { loginpage } from "../../Pageobject/loginpage";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { myinfo } from "../../Pageobject/MyinfoPage";
const lp = new loginpage()
const my = new myinfo()

Given(/^I login into the system$/, function () {
    lp.login()
});

When(/^I click on the myinfo page$/, function () {
    my.myinfotab()
});

When(/^I click on the personal info tab$/, function () {
    my.peronaldclick()
});

When(/^I click on the edit button$/, function () {
    my.editpd()
    my.fillperonsonal()
    if (cy.get('.message').contains("Successfully Saved")) {
        my.editcustom()
        my.customfield()
        if (cy.get('.message').contains("Successfully Updated")) {
            my.addattachment()
        }
    }
});

Then(/^User info edit message get displayed$/, function () {
    cy.get('.message').contains("Successfully Deleted")
});