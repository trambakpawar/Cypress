import { admin } from "../../Pageobject/AdminPage";
import { loginpage } from "../../Pageobject/LoginPage";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const a = new admin()
const lp = new loginpage()



Given('Im login into the system', function () {
    lp.login()
    cy.log("Login success")
});

When(/^I click on organization and general info$/, function () {
    a.organizationtab()
    a.ginfo()
});

When(/^I click on the edit button and edit the form$/, function () {
    a.editbutton()
    a.filldata()

});

Then(/^User info get sucessfully saved.$/, function () {
    cy.contains("Successfully Saved")
    cy.screenshot()
});

When(/^I click on organization and locations$/, function () {
    a.organizationtab()
    a.location()
});

When(/^I search the city and country$/, function () {
    a.searchlocation()

});

Then(/^User info get sucessfully saved.$/, function () {
    cy.contains("Texas").should("be.visible")
    cy.screenshot()
});
