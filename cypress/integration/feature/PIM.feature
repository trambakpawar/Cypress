Feature: Check the PIM Page 

Scenario: Add the employee to database
    Given I login into the system
    When I click on the PIM menu
    When I click on the Add employee page
    When I fill all the data of user into the form1 
    And Select the login checkbox
    When I fill all the data into form2 
    Then I Click on Save button
    Then Employee Sucessfully added message will be displaayed 

 
Scenario: Delete the employee from database
    Given I login into the system
    When I click on the PIM menu
    When I click on the Employee List page
    Then I Search the Employee Name 
    Then I Click on Search button
    Then Employee Should be displaayed
    Then I Select the employee
    Then I Click on the Delete button and Clicked on OK button
    Then Employee should get deleted from database