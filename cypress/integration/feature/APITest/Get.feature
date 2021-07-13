Feature: Check the API using GET 

Scenario: Check the Status code
    Given I visit the api link
    Then Status code should be 200

Scenario: Check the Username from api
    Given I visit the api link
    Then Response should contains Username
