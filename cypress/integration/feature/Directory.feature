Feature: Check the Directory page

Scenario Outline: Search the Directory
    Given I login into the system
    When I click on the directory menu
    Then I search the "<username>" in search box
    Then "<username>" should be displayed on page

    Examples:
    | username |
    | Ehioze Ebo |
    | Garry White |
    | Peter Mac Anderson |
    