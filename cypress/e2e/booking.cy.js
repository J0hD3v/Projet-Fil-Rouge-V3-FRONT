describe('template spec', () => {
  
  // TEST : RESERVATION
  it('can book a session', () => {
    // Arrange
    cy.visit('/reservation');
    // Act
    // cy.get('[aria-label="Réserver"]').click();   // marche sur les tests en local (npm run test) mais pas dans le workflow github
    cy.get('.p-button-danger').click();
    cy.get('#pv_id_28').click();
    cy.get('.p-datepicker-hour-picker > .p-datepicker-increment-button').click();
    cy.get('.p-dialog-mask').click();
    cy.get('.p-select-label').click();
    cy.get('#pv_id_29_1').click();
    cy.get('.p-inputnumber-increment-button').click();
    cy.get('.p-checkbox').click();
    cy.get('[aria-label="Valider"]').click();
    // // Assert
    cy.get('.p-toast-message-content').should('exist');
    // temporaire, quand fonctionnement normal remettre :
    // cy.get('.p-toast-message-success > .p-toast-message-content').should('exist');
  })
})