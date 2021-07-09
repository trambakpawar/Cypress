Feature: Check the Performance Configure Page


Scenario: Check the Configure KPI's page
    Given I login into the system and click on the Performance page
    When I click on the Configure tab and select the KPI's and add the job to performance page
    When Job get added successfully and search the job and delete it
    Then job delete message get displayed


Scenario: Check the Configure vacancies page
    Given I login into the system and click on the Performance page
    When I click on the Configure tab and select the Tracker's
    When I click on add button and filled all the data to add performance trakcers
    Then successfully added message will get displayed
    Then I delete the tracker info


