import { admin } from "../../Pageobject/AdminPage/AdminPage";
import { admin1 } from "../../Pageobject/AdminPage/AdminPage1";
import { loginpage } from "../../Pageobject/LoginPage";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const a = new admin()
const lp = new loginpage()
const ad = new admin1()

Given(/^Im login into the system$/, function () {
    lp.login()
});

When(/^I click on the admin page and click on qualification page$/, function () {
    a.adminbutton()
    ad.qualificationtab()
    ad.skillspage()
});

When(/^I add the skills to database$/, function () {
    ad.addskill()
});

Then(/^Skills are displayed on the page$/, function () {
    cy.contains("Successfully Saved")
});

When(/^I delete the skills from database$/, function () {
    ad.deleteskill()
});

Then(/^Deleted skills message should get displayed on the page$/, function () {
    cy.contains("Successfully Deleted")
});

When(/^I add the education to database$/, function () {
    ad.addeducation()
});

Then(/^Education are displayed on the page$/, function () {
    cy.get('.message').contain("Sucessfully Saved")
});

When(/^I delete the education to database$/, function () {
    ad.deleteedu()
});

Then(/^Education get deleted displayed on the page$/, function () {
    cy.contain("Sucessfully Deleted")
});
