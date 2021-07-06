import { admin } from "../../Pageobject/AdminPage/AdminPage";
import { loginpage } from "../../Pageobject/LoginPage";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const a = new admin()
const lp = new loginpage()



Given('Im login into the system', function () {
    lp.login()
    cy.log("Login success")
});

When('I click on the admin page', function () {
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
    cy.contains('Admin')
    cy.screenshot()
});


Then('No Record found should displayed on the page', function () {
    cy.contains('No Records Found')
    cy.screenshot()

});

When('I click on the add button', function () {
    a.addbutton()

});

When('I fill all the user data', function () {
    a.userdatafill()
});


When('I click on save button', function () {
    a.savebutton()
});


Then('No Record found should displayed on the page', function () {
    cy.contains('No Records Found')
    cy.screenshot()

});

Then("user sucessfully added message displayed on the page", function () {
    cy.contains("Successfully Saved")
});


When("I search the username", function () {
    a.searchuser1()
    cy.get("#searchBtn").click()
});

When("I select the username through checkbox", function () {
    cy.get("#ohrmList_chkSelectAll").check()
});

When("I click on Delete button", function () {
    cy.get("#btnDelete").click()
    cy.wait(1000)
    cy.get("#dialogDeleteBtn").click()
});

Then("user sucessfully deleted message displayed on the page", function () {
    cy.contains("Successfully Deleted")
});