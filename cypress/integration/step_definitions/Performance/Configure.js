/// <reference types="Cypress" />
import { loginpage } from "../../Pageobject/loginpage";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { perform } from "../../Pageobject/PerfromancePage/ConfigurePage";
const lp = new loginpage()
const pf = new perform()


Given(/^I login into the system and click on the Performance page$/, function () {
    lp.login()
    pf.performancepage()
});

When(/^I click on the Configure tab and select the KPI's and add the job to performance page$/, function () {
    pf.configuretab()
    pf.kpi()
    pf.addjob()
});

When(/^Job get added successfully and search the job and delete it$/, function () {
    if (cy.get('h1').contains("Error")) {
        cy.screenshot()
        cy.visit("https://opensource-demo.orangehrmlive.com/index.php/performance/searchKpi")
    }
    else if (cy.get('.message').contains("Successfully Deleted.")) {
        cy.screenshot()
        cy.visit("https://opensource-demo.orangehrmlive.com/index.php/performance/searchKpi")
    }
    pf.searchjob()
});


Then(/^job delete message get displayed$/, function () {
    cy.get('.message').contains("Successfully Deleted")
    cy.screenshot()
});

When(/^I click on the Configure tab and select the Tracker's$/, function () {
    pf.configuretab()
    pf.trackerpage()
});

When(/^I click on add button and filled all the data to add performance trakcers$/, function () {
    pf.addtracker()
});


Then(/^successfully added message will get displayed$/, function () {
    cy.contains("Successfully Saved")
    cy.screenshot()
    cy.log("Successfully Saved")
});

Then(/^I delete the tracker info$/, function () {
    cy.contains("Trambak").then(() => {
        pf.deletetracker()
        cy.get('.message').contains("Successfully Deleted")
        cy.log("Successfully Deleted")
    })
});