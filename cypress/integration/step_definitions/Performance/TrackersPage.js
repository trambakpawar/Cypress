import { loginpage } from "../../Pageobject/loginpage";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { perform } from "../../Pageobject/PerfromancePage/ConfigurePage";
import { tracker } from "../../Pageobject/PerfromancePage/TrackerPage";


const lp = new loginpage()
const pf = new perform()
const tr = new tracker()

Given(/^I login into the system$/, function () {
    cy.login()
});

When(/^I click on the Performance page$/, function () {
    pf.performancepage()
});

When(/^I click on employee trakcers page$/, function () {
    tr.trackerpage()
});

When(/^I click on the employee name on trakcer page$/, function () {
    tr.viewemp()
});

Then(/^Employee should get added to tracker log$/, function () {
    if (cy.contains("Fiona Grace").should("be.visible")) {
        cy.screenshot()
    }
});