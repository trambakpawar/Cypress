import { loginpage } from "../../Pageobject/loginpage";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { perform } from "../../Pageobject/PerfromancePage/ConfigurePage";
import { reviews } from "../../Pageobject/PerfromancePage/ManageReviewPage";

const per = require("../../../fixtures/UserData/PerformancePage.json")
const lp = new loginpage()
const pf = new perform()
const rv = new reviews()

Given(/^I login into the system and click on the Performance page$/, function () {
    lp.login()
    pf.performancepage()
});

When(/^I click on managereviews tab and select manage reviews page$/, function () {
    rv.managereviewspage()
    rv.managereviewstab()
});

When(/^I search the employee name$/, function () {
    rv.searchemployee()
});

Then(/^Employee name should be displayed$/, function () {
    if (cy.contains(per.supervisorname).should("be.visible")) {
        cy.screenshot()
    }

});
When(/^I click on add button and fill the data of employee$/, function () {
    if (cy.contains(per.supervisorname).should("be.visible")) {
        rv.addemployee()
    }
});

Then(/^Employee should be displayed$/, function () {
    cy.contains("Successfully Added")
    cy.screenshot()
});


When(/^I click on managereviews tab and select reviews list page$/, function () {
    rv.managereviewstab()
    rv.reviwelistpage()
});

When(/^I search the employee name on review page$/, function () {
    rv.reviewsearchemployee()
});

When(/^Employee name should be displayed on review and click on evaluate button$/, function () {
    if (cy.contains("Garry White").should("be.visible")) {
        cy.screenshot()
        rv.evaluatebutton()
    }
});
Then(/^Employee details should be displayed$/, function () {
    if (cy.contains("Administrator Evaluation Form").should("be.visible")) {
        cy.screenshot()
    }
});