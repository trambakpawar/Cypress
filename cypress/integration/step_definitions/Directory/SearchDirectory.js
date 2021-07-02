import { loginpage } from "../../Pageobject/loginpage";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { directory } from "../../Pageobject/Directory";

const lp = new loginpage()
const dr = new directory()

Given('I login into the system', function () {
    lp.login()
});

When('I click on the directory menu', function () {
    dr.directory()
});

Then('I search the {string} in search box', function (user) {
    dr.search(user)
    cy.wait(1000)
    dr.searchbutton()

});

Then('{string} should be displayed on page', function (user) {
    cy.contains(user)
    cy.screenshot()

});
