Feature: Check the Recruitment vacancies Page


Scenario Outline: Search the Job Title
     Given I login into the system
    When I click on the recruitment page
    When I click on the vacancies page
    When I select the "<jobtitle>" from list
    Then "<jobtitle>" will get displayed

Examples:
| jobtitle |
| Account Assistant |
| Software Engineer |
| IT Manager |
| QA Engineer |
| Support Specialist |


Scenario: Add the vacancies to system
    Given I login into the system
    When I click on the recruitment page
    When I click on the vacancies page
    When I Click on the add button
    When I filled the form and click on save
    Then Vacancies get added to system

