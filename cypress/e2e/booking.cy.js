describe('template spec', () => {
  
  // TEST : RESERVATION
  it('can book a session', () => {
    // Arrange
    cy.visit('/reservation');
    // Act
    cy.get('[aria-label="Réserver"]').click();
    cy.get('#pv_id_21').click();
    cy.get('.p-datepicker-hour-picker > .p-datepicker-increment-button').click();
    cy.get('.p-dialog-mask').click();
    cy.get('.p-select-label').click();
    cy.get('#pv_id_22_1').click();
    cy.get('.p-inputnumber-increment-button').click();
    cy.get('.p-checkbox').click();
    cy.get('[aria-label="Valider"]').click();
    // // Assert
    cy.get('.p-toast-message-success > .p-toast-message-content').should('exist');
  })
})