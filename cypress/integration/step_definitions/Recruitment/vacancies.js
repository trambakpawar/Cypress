import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { loginpage } from "../../Pageobject/LoginPage"
import { recruit } from "../../Pageobject/Recruitment";
const lp = new loginpage()
const rc = new recruit()
const rcdata = require("../../../fixtures/UserData/Recruitment.json")

Given(/^I login into the system goto the recruitment page and then vacancies page$/, function () {
    lp.login()
    rc.recruitmentpage()
    rc.vacanciespage()
});

When("I select the {string} from list", function (job) {
    rc.searchtitle(job)
    cy.wait(1000)
    rc.searchbutton()
});

Then("{string} will get displayed", function (job) {
    cy.contains(job).should("be.visible")
    cy.screenshot()

});

When(/^I Click on the add button and filled the form and click on save$/, function () {
    rc.addvacancy()
});

Then("Vacancies get added to system", function () {
    cy.get("#search-results > div").contains(rcdata.vacancyname).should("be.visible")
    cy.screenshot()

});

When(/^I select the vacancyname and delete it$/, function () {
    rc.deletevacancy()

});

Then("Vacancies get deleted from system", function () {
    cy.get("#search-results > div").contains(rcdata.vacancyname).should("not.exist")
    cy.screenshot()

});