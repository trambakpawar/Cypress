Feature: Check the API using Post

Scenario: Check the Post Command
    Given I visit the api link
    Then I post the data to api

@focus
Scenario: Check the Post then GET Command
    Given I visit the api link
    Then I post the data to api and check it again

