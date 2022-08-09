Feature: as a user I can interact with buttons

  @dev
  @smoke
  @regression
  Scenario: as a user I can interact an assert on buttons on index
    Given I am on the "home" page
    And I click the "playground" button
    When I am directed to the "playground" page
    And I click the "1st" "my button" button
    Then the "1st" "my button" should contain the text "One"
    When I click the "2nd" "my button" button
    Then the "2nd" "my button" should contain the text "Two"
    When I click the "3nd" "my button" button
    Then the "3nd" "my button" should contain the text "Three"