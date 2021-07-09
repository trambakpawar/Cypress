Feature: Check the Performance Review Page


Scenario: Search the employee in database
    Given I login into the system and click on the Performance page
    When I click on managereviews tab and select manage reviews page
    When I search the employee name
    Then Employee name should be displayed


Scenario: Add the employee to database
    Given I login into the system and click on the Performance page
    When I click on managereviews tab and select manage reviews page
    When I click on add button and fill the data of employee
    Then Employee should be displayed


Scenario: Check the Reviews Page Review List
    Given I login into the system and click on the Performance page
    When I click on managereviews tab and select reviews list page
    When I search the employee name on review page
    When Employee name should be displayed on review and click on evaluate button
    Then Employee details should be displayed