import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { loginpage } from "../../Pageobject/LoginPage"
import { addemp } from "../../Pageobject/PIMpage/AddEmppage"
const lp = new loginpage()
const pm = new addemp()
const pimdata = require("../../../fixtures/UserData/PIMPage.json")


Given('I login into the system and click on the PIM menu', function () {
    lp.login()
    pm.pimpage()
});

When('I click on the Add employee page and fill all the data of user into the form1', function () {
    pm.addemppage()
    pm.firstform()
});

When('I fill all the data into form2 and Click on Save button', function () {
    pm.secondform()
    pm.savebutton()
});

Then('Employee Sucessfully added message will be displaayed', function () {
    cy.contains(pimdata.fullname).should("be.visible")
    cy.screenshot()
});

And('Select the login checkbox', function () {
    pm.checklogin()
});

When('I click on the Employee List page', function () {
    pm.emppage()
});

Then('I Search the Employee Name and Click on Search button', function () {
    pm.search()
    pm.searchbutton1()
});

Then('Employee Should be displaayed', function () {
    pm.viewuser()
});

When('I Select the employee and Click on the Delete button and the OK button', function () {
    pm.checkbox()
    pm.delete()
});

Then('Employee should get deleted from database', function () {
    cy.contains("No Records Found").should("be.visible")
    cy.screenshot()
});
