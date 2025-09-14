describe('template spec', () => {
  
  // TEST : CONNEXION SUCCESS
  xit('can connect user', () => {
    // Arrange
    cy.visit('/')
    const messageOk = `Bienvenue "Test" !`;
    // Act
    cy.get('.p-menubar-end > div.d-flex > .d-flex').click();
    cy.get('[name="username"]').type('Test');
    cy.get('[name="password"]').type('1234');
    cy.get('[name="submitConnectionForm"]').click();
    // Assert
    cy.get('.p-toast-detail').contains(messageOk);
  })

  // TEST : CONNEXION FAILED (bad logs)
  xit('cannot connect not existing user', () => {
    // Arrange
    cy.visit('/')
    const messageBadLogs = `Identifiants incorrects.`;
    // Act
    cy.get('.p-menubar-end > div.d-flex > .d-flex').click();
    cy.get('[name="username"]').type('Test');
    cy.get('[name="password"]').type('1234');
    cy.get('[name="submitConnectionForm"]').click();
    // Assert
    cy.get('.p-toast-detail').contains(messageBadLogs);
  })

  // TEST : CONNEXION FAILED (server down)
  it('displays a popup if server down', () => {
    // Arrange
    cy.visit('/')
    const messageServerDown = `Le serveur est temporairement indisponible, merci de patienter et de réessayer.`;
    // Act
    cy.get('.p-menubar-end > div.d-flex > .d-flex').click();
    cy.get('[name="username"]').type('Test');
    cy.get('[name="password"]').type('1234');
    cy.get('[name="submitConnectionForm"]').click();
    // Assert
    cy.get('.p-toast-detail').contains(messageServerDown);
  })
})