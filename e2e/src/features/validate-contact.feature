Feature: as a user I expect to be able to validate a new contact

  @regression
  Scenario: as a user I can hit a validation error on each field then create a new contact
    Given I am on the "home" page
    And I click the "create" button
    When I am directed to the "create contact" page
    And the "create contact header" should equal the text "Create Contact"
    And I click the "save" button
    Then the "error message" should contain the text "Error: The "name" field can't be empty"
    Then I fill in the "name" input with "Bart Simpson"
    And I click the "save" button
    Then the "error message" should contain the text "Error: The "phone" field can't be empty"
    When I fill in the "phone" input with "038-9494-9999"
    And I click the "save" button
    Then the "error message" should contain the text "Error: The "street" field can't be empty"
    When I fill in the "street" input with "833, Lorem ipsum st."
    And I click the "save" button
    Then the "error message" should contain the text "Error: The "city" field can't be empty"
    When I fill in the "city" input with "Randomville"
    And I click the "save" button
    Then the "error message" should not be displayed

    And I am directed to the "home" page

    And I fill in the "search" input with "Bart Simpson"
    And the "contact" should be displayed
    And the "full name label" should contain the text "Name:"
    And the "name" should equal the text "Bart Simpson"
    And the "gender label" should contain the text "Gender:"
    And the "gender" should equal the text "Male"
    And the "address label" should contain the text "Address:"
    And the "address" should equal the text "833, Lorem ipsum st., Randomville"
    And the "edit" should be displayed
    And the "delete" should be displayed




