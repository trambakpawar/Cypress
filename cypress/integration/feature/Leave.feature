Feature: Check the Leave Page

Scenario: Assign for leave
    Given I login into the system
    When I Click on the Leave Page
    When I Click on assign leave page
    When I fill the data
    When I click on assign button
    Then Leave assigned message get displayed
 
 