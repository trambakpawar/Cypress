import { loginpage } from "../../Pageobject/loginpage";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { post } from "../../Pageobject/BuzzPage";
const lp = new loginpage()
const po = new post()


Given(/^I login into the system and I click on the buzz menu$/, function () {
    lp.login()
    cy.log("Login Sucess")
    po.buzzapge()
});


When(/^I post the message in textbox$/, function () {
    po.updatestatus()
    cy.wait(1000)
    po.post()
});

Then(/^message should be displayed on page$/, function () {
    cy.get("#buzz").contains("bla bla bla").should("be.visible")
    cy.screenshot()
});

When(/^I upload image and message in textbox$/, function () {
    po.uploadimage()
    po.imagebutton()
});

Then(/^image and message should be displayed on page$/, function () {
    cy.contains("goku")
});

When(/^I select the post and delete$/, function () {
    po.deletepost()

});

Then(/^message should be deleted from the page$/, function () {
    cy.get("#successDataModal").contains("Successfully Deleted")
    cy.screenshot()
});


When(/^I select the post and edit$/, function () {
    po.editpost()

});

Then(/^message should be edited$/, function () {
    cy.get("#postBody").get("#postContent").contains("baba black ship")
    cy.screenshot()
});

