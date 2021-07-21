Feature: Check the PIM Page

Scenario: Check the PIM configuration optinal field page
    Given I login into the system and click on the PIM menu
    When I click on configuration menu and click on optional field
    When I click on edit and uncheck the Tax exemption checkbox
    Then tax exemption checkbox should get disabled


Scenario: Check the PIM configuration custom field page (add field)
    Given I login into the system and click on the PIM menu
    When I click on configuration menu and click on custom field
    When I click on add and fill the details of field
    Then Field name should get displayed


Scenario: Check the PIM configuration custom field page (delete field)
    Given I login into the system and click on the PIM menu
    When I click on configuration menu and click on custom field
    When I check the field and delete the field
    Then Field name not should get displayed on webpage


Scenario: Check the PIM configuration reporting method (Add Method)
    Given I login into the system and click on the PIM menu
    When I click on configuration menu and click on reporting method
    When I click on add button and submit the method
    Then Method name should get displayed on webpage


Scenario: Check the PIM configuration reporting method (Delete Method)
    Given I login into the system and click on the PIM menu
    When I click on configuration menu and click on reporting method
    When I select the method and click on delete button
    Then Method name should get removed from webpage


Scenario: Check the PIM configuration termination reason (Add Reaoson)
    Given I login into the system and click on the PIM menu
    When I click on configuration menu and click on termination reason
    When I click on add button and submit the reason
    Then Reason should get displayed on webpage


Scenario: Check the PIM configuration termination reason (Delete Reason)
    Given I login into the system and click on the PIM menu
    When I click on configuration menu and click on termination reason
    When I select the reason and click on delete button
    Then Reason should get removed from webpage
