Feature: as a user I expect to be able to delete the contact

  @regression
  Scenario: As a user I can delete a contact
    Given I am on the "home" page
    And I click the "create" button
    When I am directed to the "create contact" page
    And the "create contact header" should equal the text "Create Contact"
    Then I fill in the "name" input with "Tina Bradley"
    And I select the "Female" option from the "gender"
    And I fill in the "phone" input with "153-555-0113"
    And I fill in the "street" input with "760 Puma Terrace"
    And I fill in the "city" input with "Springfield"
    And I click the "save" button
    And I am directed to the "home" page
    And I fill in the "search" input with "Tina Bradley"
    And the "contact" should be displayed
    And I click accept on the alert dialog
    When I click the "delete" button
    And I fill in the "search" input with "Tina Bradley"
    Then the "contact" should not be displayed
    And the "no items message" should contain the text "There are no items to display"