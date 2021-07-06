Feature: Check the Admin Page 1

Scenario: Add the skill to organization page  
    Given Im login into the system
    When I click on the admin page and click on qualification page
    When I add the skills to database
    Then Skills are displayed on the page


Scenario: Delete the skill from organization page  
    Given Im login into the system
    When I click on the admin page and click on qualification page
    When I delete the skills from database
    Then Deleted skills message should get displayed on the page