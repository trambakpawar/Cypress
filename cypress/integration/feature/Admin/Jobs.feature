Feature: Check the Jobs page

Scenario: Check the job title page (Add job title)
    Given I login into system and goto jobtitle
    When I click on add page and fill the form
    Then Job title should get displayed in the list

Scenario: Check the job title page (Delete job title)
    Given I login into system and goto jobtitle
    When I select the jobtitle and delete it
    Then Job title should removed from the list


Scenario: Check the workshift page (Add workshift)
    Given I login into system and goto workshift page
    When I click on add button and fill the form
    Then Work shift should get added to list


Scenario: Check the workshift page (Delete workshift)
    Given I login into system and goto workshift page
    When I select the workshift and delete it
    Then Work shift should get removed to list
