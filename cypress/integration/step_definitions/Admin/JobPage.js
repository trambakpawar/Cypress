import { job } from "../../Pageobject/AdminPage/JobPage";
import { loginpage } from "../../Pageobject/LoginPage";

const jb = new job()
const lp = new loginpage()
const jobdata = require("../../../fixtures/UserData/Jobs.json")


Given(/^I login into system and goto jobtitle$/, function () {
    lp.login()
    jb.jobmenu()
    jb.jobtitle()
});

When(/^I click on add page and fill the form$/, function () {
    jb.addjob()
});

Then(/^Job title should get displayed in the list$/, function () {
    cy.get("#search-results > div.inner").contains(jobdata.jobtitle).should("be.visible")
    cy.screenshot()
});

When(/^I select the jobtitle and delete it$/, function () {
    jb.deletejob()
});

Then(/^Job title should removed from the list$/, function () {
    cy.get("#search-results > div.inner").contains(jobdata.jobtitle).should("not.exist")
    cy.screenshot()
});


Given(/^I login into system and goto workshift page$/, function () {
    lp.login()
    jb.jobmenu()
    jb.workshiftpage()
});

When(/^I click on add button and fill the form$/, function () {
    jb.addworkshift()
});

Then(/^Work shift should get added to list$/, function () {
    cy.get("#search-results > .inner").contains(jobdata.shiftname).should("be.visible")
    cy.screenshot()
});

When(/^I select the workshift and delete it$/, function () {
    jb.deleteworkshift()
});

Then(/^Work shift should get removed to list$/, function () {
    cy.get("#search-results > .inner").contains(jobdata.shiftname).should("not.exist")
    cy.screenshot()
});