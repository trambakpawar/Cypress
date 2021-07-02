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

When(/^I click on the vacancies page$/, function () {
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

When(/^I Click on the add button$/, function () {
    rc.addbutton2()
});

When(/^I filled the form and click on save$/, function () {
    rc.addvacancy()
});


Then("Vacancies get added to system", function () {
    cy.contains("Successfully Saved")
    cy.screenshot()

});