Feature: Check the Buzz page


Scenario: Post the Update
    Given I login into the system and I click on the buzz menu
    When I post the message in textbox
    Then message should be displayed on page


Scenario: Post the Image
    Given I login into the system and I click on the buzz menu
    When I upload image and message in textbox
    Then image and message should be displayed on page


Scenario: Edit the Post
    Given I login into the system and I click on the buzz menu
    When I select the post and edit
    Then message should be edited


Scenario: Delete the Post
    Given I login into the system and I click on the buzz menu
    When I select the post and delete
    Then message should be deleted from the page