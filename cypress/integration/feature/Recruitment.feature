Feature: Check the Recruitment Page

Scenario: Search the Candidate in database
    Given I login into the system
    When I click on the recruitment page
    When I click on the candidate page 
    When I fill the data of candidate and click on search
    Then candidate name should be displayed


Scenario: Add the Candidate in database
    Given I login into the system
    When I click on the recruitment page
    When I click on the candidate page 
    When I click on add button
    Then I fill the add candidate form 
    Then Candidate sucessfully get added


Scenario: Delete the Candidate from database
    Given I login into the system
    When I click on the recruitment page
    When I click on the candidate page 
    When I search the candidate namd and select the candidate
    Then I click on delete button and click on ok 
    Then Candidate sucessfully get deleted


Scenario: Download the Candidate resume 
    Given I login into the system
    When I click on the recruitment page
    When I click on the candidate page 
    When I search the candidate name 
    Then I click on download button  
    

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

