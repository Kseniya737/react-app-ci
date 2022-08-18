Feature: as a user I expect to be able to search for a new contact

  @regression
  Scenario: as a user I expect to be able to search for a new contact
    Given I am on the "home" page
    And I fill in the "search" input with "Funky Name"
    Then the "contact" should not be displayed