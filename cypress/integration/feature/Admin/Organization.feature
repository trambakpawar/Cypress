Feature: Check the Configuration Page

Scenario: Verify the organization general info
    Given Im login into the system and click on the admin page
    When I click on organization and general info
    When I click on the edit button and edit the form
    Then User info get sucessfully saved.

Scenario: Verify the organization locations
    Given Im login into the system
    When I click on organization and locations
    When I search the city and country
    Then Inserted location get displayed


Scenario: Delete the organization locations
    Given Im login into the system
    When I click on organization and locations
    When I search the city and country and delete the location
    Then User info get sucessfully saved.


Scenario: Change the organization structure
    Given Im login into the system
    When I click on organization and structure
    When I add the position in organization
    Then Organization get sucessfully changed.