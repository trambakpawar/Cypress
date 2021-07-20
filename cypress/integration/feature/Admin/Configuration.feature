Feature: Check the Configuration Page

Scenario: Check the email configuration
    Given When I login into system and go to configuration page
    When I click on email configuration and click on the edit button
    When I select the test mail and submuit the mail
    Then sucessfully saved message get displayed


Scenario: Check the email subscription
    Given When I login into system and go to configuration page
    When I click on email subscription and click on the edit button
    When I select the notification types and click on save
    Then sucessfully saved message get display


Scenario: Check the localization
    Given When I login into system and go to configuration page
    When I click on localization and click on the edit button
    When I select the language types and date format click on save
    Then Sucessfully saved message get display


Scenario: Check the language packege
    Given When I login into system and go to configuration page
    When I click on language packages and click on add button
    When I select the language types and click on save button
    Then Langauge Sucessfully saved message get display

Scenario: Check the langauge download
    Given When I login into system and go to configuration page
    When I click on language packages and click on download button
    Then Langauge Sucessfully get downloaded


Scenario: Check the Modules Page
    Given When I login into system and go to configuration page
    When I click on modules page and click on edit button and uncheck some modules
    Then Modules Sucessfully get saved


Scenario: Check the Social Media Authentication Page Add
    Given When I login into system and go to configuration page
    When I click on sma page and click on add button
    When I fill all the data and click on save button
    Then Provider name is get displayed on page


Scenario: Check the Social Media Authentication Page Delete
    Given When I login into system and go to configuration page
    When I click on sma page and click on delete button
    Then Provider name is not displayed on page
