Feature: Check the Configuration Page

Scenario: Check the email configuration
    Given When I login into system and go to configuration page
    When I click on email configuration and click on the edit button
    When I select the test mail and submuit the mail
    Then sucessfully saved message get displayed

