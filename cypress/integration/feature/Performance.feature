Feature: Check the Performance Page


Scenario: Check the Configure KPI's page
    Given I login into the system and click on the Performance page
    When I click on the Configure tab and select the KPI's and add the job to performance page
    When Job get added successfully and search the job and delete it
    Then job delete message get displayed


Scenario: Check the Configure vacancies page
    Given I login into the system and click on the Performance page
    When I click on the Configure tab and select the Tracker's
    When I click on add button and filled all the data to add performance trakcers
    Then successfully added message will get displayed
    Then I delete the tracker info


Scenario: Check the Reviews Page Manage Reviews
    Given I login into the system
    When I click on the Performance page
    When I click on managereviews tab and select manage reviews page
    When I search the employee name
    When Employee name should be displayed
    When I click on add button and fill the data of employee
    Then Employee should be displayed


Scenario: Check the Reviews Page Review List
    Given I login into the system
    When I click on the Performance page
    When I click on managereviews tab and select reviews list page
    When I search the employee name on review page
    When Employee name should be displayed on review page
    When I click on evaluate button
    Then Employee details should be displayed

Scenario: Check the Employee Trackers Page
    Given I login into the system
    When I click on the Performance page
    When I click on employee trakcers page
    When I click on the employee name on trakcer page
    Then Employee should get added to tracker log