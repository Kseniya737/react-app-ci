Feature: as a user I expect to be able to navigate to the home page

  @dev
  @smoke
  @regression
  Scenario: As a user I expect to be able to see contacts
    Given I am on the "home" page
    Then the "contacts header" should contain the text "Contacts"
    And the "header logo" should be displayed

  @smoke
  @regression
  Scenario: as a user I don't expect to see a contact that does not exist
    Given I am on the "home" page
    And I fill in the "search" input with "Funky Name"
    Then the "contact" should not be displayed
