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

@focus
Scenario: Check the langauge download
    Given When I login into system and go to configuration page
    When I click on language packages and click on download button
    Then Langauge Sucessfully get downloaded
