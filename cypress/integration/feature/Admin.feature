Feature: Check the Admin Page
  
Scenario: Searching the user in database
    Given  Im login into the system
    When I click on the admin page
    When I enter the username to search 
    Then User data should displayed on the page


Scenario: Search the wrong user in database 
    Given Im login into the system
    When I click on the admin page
    When I enter the wrong username to search 
    Then No Record found should displayed on the page 

Scenario: Add the user in database 
    Given Im login into the system
    When I click on the admin page
    When I click on the add button
    When I fill all the user data 
    When I click on save button
    Then user sucessfully added message displayed on the page 


Scenario: Delete the user from database 
    Given Im login into the system
    When I click on the admin page
    When I search the username 
    When I select the username through checkbox
    When I click on Delete button 
    Then user sucessfully deleted message displayed on the page 

   
Scenario: Verify the organization general info 
    Given Im login into the system
    When I click on the admin page
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

@focus
Scenario: Change the organization structure
    Given Im login into the system
    When I click on organization and structure
    When I add the position in organization
    Then Organization get sucessfully changed. 