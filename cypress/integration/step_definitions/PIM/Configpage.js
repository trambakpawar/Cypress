import { loginpage } from "../../Pageobject/LoginPage"
import { configuration } from "../../Pageobject/PIMpage/Configpage"
const lp = new loginpage()
const cf = new configuration()
const checkbox = "#configPim_chkShowTax"

const pimdata = require("../../../fixtures/UserData/PIMPage.json")
Given(/^I login into the system and click on the PIM menu$/, function () {
    lp.login()
    cf.pimpage
});

When(/^I click on configuration menu and click on optional field$/, function () {
    cf.optianlfield()
});

When(/^I click on edit and uncheck the Tax exemption checkbox$/, function () {
    cf.editinfo()
});

Then(/^tax exemption checkbox should get disabled$/, function () {
    cy.get(checkbox).should("be.disabled")
    cy.screenshot()
});


When(/^I click on configuration menu and click on custom field$/, function () {
    cf.customfield()
});

When(/^I click on add and fill the details of field$/, function () {
    cf.addfield()
});

Then(/^Field name should get displayed$/, function () {
    cy.get("#customFieldListPane > div.inner").contains(pimdata.fieldname).should("be.visible")
    cy.screenshot()
});


When(/^I check the field and delete the field$/, function () {
    cf.deletefield()
});

Then(/^Field name not should get displayed on webpage$/, function () {
    cy.get("#customFieldListPane > div.inner").contains(pimdata.fieldname).should("not.exist")
    cy.screenshot()
});


When(/^I click on configuration menu and click on reporting method$/, function () {
    cf.reportpage()
});

When(/^I click on add button and submit the method$/, function () {
    cf.addreport()
});

Then(/^Method name should get displayed on webpage$/, function () {
    cy.get("#recordsListDiv > .inner").contains(pimdata.reporting).should("be.visible")
    cy.screenshot()
});


When(/^I select the method and click on delete button$/, function () {
    cf.deletereport()
});

Then(/^Method name should get removed from webpage$/, function () {
    cy.get("#recordsListDiv > .inner").contains(pimdata.reporting).should("not.exist")
    cy.screenshot()
});


When(/^I click on configuration menu and click on termination reason$/, function () {
    cf.pimpage()
    cf.reasonpage()
});

When(/^I click on add button and submit the reason$/, function () {
    cf.addreason()
});



Then(/^Reason should get displayed on webpage$/, function () {
    cy.get("#recordsListDiv > .inner").contains(pimdata.reason).should("be.visible")
    cy.screenshot()
});

When(/^I select the reason and click on delete button$/, function () {
    cf.deletereason()
});

Then(/^Reason should get removed from webpage$/, function () {
    cy.get('#recordsListDiv > div.inner').contains(pimdata.reason).should("not.exist")
    cy.screenshot()
});

