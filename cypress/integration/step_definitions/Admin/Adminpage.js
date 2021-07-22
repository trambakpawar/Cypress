import { admin } from "../../Pageobject/AdminPage/AdminPage";
import { loginpage } from "../../Pageobject/LoginPage";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const a = new admin()
const lp = new loginpage()
const ad = require("../../../fixtures/UserData/AdminPage.json")
const AdminPage = require("../../Pageobject/AdminPage/AdminPage")

Given('Im login into the system and click on the admin page', function () {
    lp.login()
    cy.log("Login success")
    a.adminbutton()
});


When('I enter the username to search', function () {
    a.searchuser()
    cy.wait(1000)
    a.searchbutton()
});
When('I enter the wrong username to search', function () {
    a.searchwronguser()
    cy.wait(1000)
    a.searchbutton()
});
Then('User data should displayed on the page', function () {
    cy.contains(ad.username)
    cy.screenshot()
});

Then('No Record found should displayed on the page', function () {
    cy.contains('No Records Found')
    cy.screenshot()

});

When('I click on the add button and fill all the user data then click on save button', function () {
    a.addbutton()
    a.userdatafill()

});

Then('No Record found should displayed on the page', function () {
    cy.contains('No Records Found')
    cy.screenshot()

});

Then("user sucessfully added message displayed on the page", function () {
    cy.get('#search-results > .inner').contains(ad.username3).should("be.visible")
});

When("I search the username and select it then click on delete button", function () {
    a.searchuser1()
    cy.get("#searchBtn").click()
    cy.get("#ohrmList_chkSelectAll").check()
    cy.get("#btnDelete").click()
    cy.wait(1000)
    cy.get("#dialogDeleteBtn").click()
});

Then("user sucessfully deleted message displayed on the page", function () {
    cy.get('#search-results > .inner').contains(ad.username3).should("not.exist")
});