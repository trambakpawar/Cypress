import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { loginpage } from "../../Pageobject/LoginPage"
const lp = new loginpage()

Given('I open login page', function () {
    lp.visit1()
});

When('I submit {string} and {string}', function (username, password) {
    lp.setusername(username)
    cy.wait(1000)
    lp.setpassword(password)
});

When('Click on login button', function () {
    lp.loginbutton()
});

Then('Login Sucess Dashboard window should displayed.', function () {
    cy.get("#menu_dashboard_index > b").should('have.text', 'Dashboard')
});
