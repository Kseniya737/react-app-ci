Feature: as a user I can interact with avatars

  @smoke
  @regression
  Scenario: as a user I can interact an assert on avatars
    Given I am on the "home" page
    And I click the "playground" button
    When I am directed to the "playground" page
    And the "1st" "avatar" should be displayed
    And the "2nd" "avatar" should be displayed
    And the "small avatar" should be displayed
    And I should see "2" "avatar" displayed