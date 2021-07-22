Feature: Check the Admin Page

Scenario: Searching the user in database
    Given  Im login into the system and click on the admin page
    When I enter the username to search
    Then User data should displayed on the page


Scenario: Search the wrong user in database
    Given Im login into the system and click on the admin page
    When I enter the wrong username to search
    Then No Record found should displayed on the page


Scenario: Add the user in database
    Given Im login into the system and click on the admin page
    When I click on the add button and fill all the user data then click on save button
    Then user sucessfully added message displayed on the page


Scenario: Delete the user from database
    Given Im login into the system and click on the admin page
    When I search the username and select it then click on delete button
    Then user sucessfully deleted message displayed on the page



