Feature: as a user I can interact with tabs

  @dev
  @smoke
  @regression
  Scenario: as a user I can interact and assert on new tabs
    Given I am on the "home" page
    And I click the "playground" button
    When I am directed to the "playground" page
    And I click the "new tab" button
    And the "2nd" tab should contain the title "Contacts"
    And the "1st" tab should contain the title "Playground"
    And I fill in the "search" input on the "2nd" tab with "Sloane Juarez"