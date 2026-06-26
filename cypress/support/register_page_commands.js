/// <reference types='cypress' />   


/// Elementos:
 
const elements = {
     buttons: {
         Register: '#btnRegister'
     },
     fields: {
           name: '#user',
          email: '#email',
          password: '#password',

     },
     messages : {
          error: '.errorLabel',
          successTitle: '#swal2-title',
          successSubtitle: '#swal2-html-container',
     }


}

/// Ações/Métodos/Funções

Cypress.Commands.add('saveregister', () => {
     cy.get(elements.buttons.Register)
        .click()

})

Cypress.Commands.add('fillEmail', (email) => {
     cy.get(elements.fields.email)
        .should('be.visible')
        .type(email)

})

Cypress.Commands.add('fillName', (name) => {
     cy.get(elements.fields.name)
        .should('be.visible')
        .type(name)

})

Cypress.Commands.add('fillPassword', (password) => {
     cy.get(elements.fields.password)
        .should('be.visible')
        .type(password)

})

Cypress.Commands.add('checkMessage', (message) => {
     cy.get(elements.messages.error)
      .should('have.text', message)
})

Cypress.Commands.add('checkRegisterSuccess', (person) => {
     cy.get(elements.messages.successTitle)
      .should('have.text','Cadastro realizado!')

     cy.get(elements.messages.successSubtitle, {timeout: 3000})
      .should('have.text',`Bem-vindo ${person}`)
})

