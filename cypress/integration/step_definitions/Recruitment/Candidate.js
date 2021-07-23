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
    rc.addcandidate()
});

When(/^I click on the candidate page and search the candidate name and select the candidate$/, function () {
    rc.candidatepage()
    rc.search2()
    rc.selectcandidate()
});


Then(/^candidate name should be displayed$/, function () {
    cy.get("#search-results > div").contains(rcdata.fullname).should("be.visible")
    cy.screenshot()
});

Then(/^Candidate sucessfully get added$/, function () {
    cy.get("#search-results > div").contains(rcdata.fullname).should("be.visible")
    cy.screenshot()
});

Then(/^I click on delete button and click on ok$/, function () {
    rc.deletecandidate()

});

Then(/^Candidate sucessfully get deleted$/, function () {
    cy.get("#search-results > div").contains(rcdata.fullname).should("not.exist")
    cy.screenshot()
});
