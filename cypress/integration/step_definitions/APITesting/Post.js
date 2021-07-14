/// <reference types="Cypress" />

import { apidemo } from "../../Pageobject/APITestpage"
const aa = new apidemo()

Given(/^I visit the api link$/, function () {
    aa.visit()
});

Then(/^I post the data to api$/, function () {

    aa.postdata()

});

Then(/^I post the data to api and check it again$/, function () {

    aa.postget()

});

