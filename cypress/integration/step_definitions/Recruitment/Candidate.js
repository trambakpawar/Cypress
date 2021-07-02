import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { loginpage } from "../../Pageobject/LoginPage"
import { recruit } from "../../Pageobject/Recruitment";
const lp = new loginpage()
const rc = new recruit()


Given(/^I login into the system$/, function () {
    lp.login()
});

When(/^I click on the recruitment page$/, function () {
    rc.recruitmentpage()
});

When(/^I click on the candidate page$/, function () {
    rc.candidatepage()
});

When(/^I fill the data of candidate and click on search$/, function () {
    rc.search()
});

When(/^I click on add button$/, function () {
    rc.addbutton()
});

When(/^I search the candidate namd and select the candidate$/, function () {
    rc.deletesearch()
    cy.wait(1000)
    rc.selectcandidate()

});

When(/^I search the candidate name$/, function () {
    rc.search2()
});

Then(/^candidate name should be displayed$/, function () {
    cy.contains("Matilda Fleenor")
});

Then(/^I fill the add candidate form$/, function () {
    rc.addcandidate()
});

Then(/^Candidate sucessfully get added$/, function () {
    cy.contains("Successfully Saved")
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

