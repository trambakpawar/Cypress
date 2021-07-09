import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { loginpage } from "../../Pageobject/LoginPage"
import { recruit } from "../../Pageobject/Recruitment";
const lp = new loginpage()
const rc = new recruit()
const rcdata = require("../../../fixtures/UserData/Recruitment.json")

Given(/^I login into the system and click on the recruitment page$/, function () {
    lp.login()
    rc.recruitmentpage()
});

When(/^I click on the candidate page and fill the data of candidate and click on search$/, function () {
    rc.candidatepage()
    rc.search()
});

When(/^I click on the candidate page and search the candidate name$/, function () {
    rc.candidatepage()
    rc.search2()
});


When(/^I click on the candidate page and click on add button and fill the add candidate form$/, function () {
    rc.candidatepage
    rc.addbutton()
    rc.addcandidate()
});

When(/^I click on the candidate page and search the candidate name and select the candidate$/, function () {
    rc.candidatepage()
    rc.deletesearch()
    cy.wait(1000)
    rc.selectcandidate()
});


Then(/^candidate name should be displayed$/, function () {
    cy.contains(rcdata.fullname)
});

Then(/^Candidate sucessfully get added$/, function () {
    cy.contains("Successfully Saved")
    cy.screenshot
});

Then(/^I click on delete button and click on ok$/, function () {
    rc.deletecandidate()
    cy.wait(1000)
    rc.confirmdelete()
});

Then(/^Candidate sucessfully get deleted$/, function () {
    cy.contains("Successfully Deleted")
});

Then(/^I click on download button$/, function () {
    rc.download()
});

