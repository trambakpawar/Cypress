Feature: Check the Performance Employee Page

Scenario: Check the Employee Trackers Page
    Given I login into the system and click on the Performance page
    When I click on employee trakcers page and click on the employee name
    Then Employee should get added to tracker log