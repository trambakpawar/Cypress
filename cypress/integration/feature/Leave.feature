Feature: Check the Leave Page

Scenario: Assign the leave page
    Given I login into the system and I Click on the Leave Page
    When I Click on assign leave page and I fill the data
    Then Leave assigned message get displayed


Scenario: Check the leave list page
    Given I login into the system and I Click on the Leave Page
    When I click on the leave list page and search the employee
    Then Employee name should get displayed