Feature: Check the Recruitment Candidate Page

Scenario: Add the Candidate in database
    Given I login into the system and click on the recruitment page
    When I click on the candidate page and click on add button and fill the add candidate form
    Then Candidate sucessfully get added

Scenario: Search the Candidate in database
    Given I login into the system and click on the recruitment page
    When I click on the candidate page and fill the data of candidate and click on search
    Then candidate name should be displayed


Scenario: Download the Candidate resume
    Given I login into the system and click on the recruitment page
    When I click on the candidate page and search the candidate name
    Then I click on download button


Scenario: Delete the Candidate from database
    Given I login into the system and click on the recruitment page
    When I click on the candidate page and search the candidate name and select the candidate
    When I click on delete button and click on ok
    Then Candidate sucessfully get deleted




