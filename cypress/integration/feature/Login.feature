Feature: Check the Login Page

 
  
Scenario Outline: Opening a OrangeHRM  login page
    Given I open login page
    When I submit "<username>" and "<password>"
    When Click on login button
    Then Login Sucess Dashboard window should displayed.

Examples:
| username| password |
| admin | admin123 |
| admin123| admin123 |
| admin |admin |