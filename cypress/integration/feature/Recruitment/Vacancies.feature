Feature: Check the Recruitment vacancies Page


Scenario Outline: Search the Job Title
    Given I login into the system goto the recruitment page and then vacancies page
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
    Given I login into the system goto the recruitment page and then vacancies page
    When I Click on the add button and filled the form and click on save
    Then Vacancies get added to system



Scenario: Delete the vacancies from system
    Given I login into the system goto the recruitment page and then vacancies page
    When I select the vacancyname and delete it
    Then Vacancies get deleted from system


