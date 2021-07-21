Feature: Check the PIM Page

Scenario: Add the employee to database
    Given I login into the system and click on the PIM menu
    When I click on the Add employee page and fill all the data of user into the form1
    And Select the login checkbox
    When I fill all the data into form2 and Click on Save button
    Then Employee Sucessfully added message will be displaayed


Scenario: Delete the employee from database
    Given I login into the system and click on the PIM menu
    When I click on the Employee List page
    Then I Search the Employee Name and Click on Search button
    Then Employee Should be displaayed
    When I Select the employee and Click on the Delete button and the OK button
    Then Employee should get deleted from database