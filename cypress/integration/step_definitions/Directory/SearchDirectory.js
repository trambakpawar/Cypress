import { loginpage } from "../../Pageobject/loginpage";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { directory } from "../../Pageobject/Directory";

const lp = new loginpage()
const dr = new directory()

Given('I login into the system and click on the directory menu', function () {
    lp.login()
    dr.directory()
});

Then('I search the {string} in search box', function (user) {
    dr.search(user)
});

Then('{string} should be displayed on page', function (user) {
    cy.contains('ul',user).should("be.visible")
    cy.screenshot()
});
