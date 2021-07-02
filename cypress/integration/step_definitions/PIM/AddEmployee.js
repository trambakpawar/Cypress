import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { loginpage } from "../../Pageobject/LoginPage"
import { addemp } from "../../Pageobject/PIMpage"
const lp = new loginpage()
const pm = new addemp()


Given('I login into the system', function () {
    lp.login()
});

When('I click on the PIM menu', function () {
    pm.pimpage()
});

When('I click on the Add employee page', function () {
    pm.addemppage()
});

When('I fill all the data of user into the form1', function () {
    pm.firstform()
});

When('I fill all the data into form2', function () {
    pm.secondform()
});

Then('I Click on Save button', function () {
    pm.savebutton()
});

Then('Employee Sucessfully added message will be displaayed', function () {
    cy.contains("Trambak Ramesh Pawar ")
    cy.screenshot()
});

And('Select the login checkbox', function () {
    pm.checklogin()
});

When('I click on the Employee List page', function () {
    pm.emppage()
});

Then('I Search the Employee Name', function () {
    pm.search()


});
Then('I Click on Search button', function () {
    pm.searchbutton1()
});

Then('Employee Should be displaayed', function () {
    pm.viewuser()
});

Then('I Select the employee', function () {
    pm.checkbox()
});

Then('I Click on the Delete button and Clicked on OK button', function () {
    pm.delete()
});

Then('Employee should get deleted from database', function () {
    cy.contains("Successfully Deleted")
});
