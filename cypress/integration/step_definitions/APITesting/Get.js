/// <reference types="Cypress" />
import { apidemo } from "../../Pageobject/APITestpage"
const aa = new apidemo()

Given(/^I visit the api link$/, function () {
    aa.visit()
});

Then(/^Status code should be 200$/, function () {

    aa.status()

});

Then(/^Response should contains Username$/, function () {

    aa.getdata()

});