Feature: Check the Leave Page

Scenario: Assign the leave page
    Given I login into the system
    When I Click on the Leave Page
    When I Click on assign leave page
    When I fill the data
    When I click on assign button
    Then Leave assigned message get displayed
 
Scenario: Check the leave list page
    Given I login into the system
    When I Click on the Leave Page
    When I click on the leave list page and search the employee
    Then Employee name should get displayed