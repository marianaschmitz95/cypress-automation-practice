/// <reference types='cypress' />

Cypress.Commands.add('accessregisterpage', () => {
    // ACESSOU A APLICAÇÃO
    cy.visit('/')
      .get('.header-logo')

    // ENTROU NO REGISTRO
    cy.get('.fa-lock')
        .click()

    // VERIFICA SE ESTÁ NA PAG DE CADASTRO
    cy.get('#user')
      .should('be.visible')
    
})