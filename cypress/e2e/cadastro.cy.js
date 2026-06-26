/// <reference types='cypress' />
import { faker } from '@faker-js/faker';
import home_page from '../support/pages/home_page';
import register_page from '../support/pages/register_page';
const user_data = require('../fixtures/cadastro_valid_data.json')

describe('Cadastro de usuário', () => {

  beforeEach('Acessando a página de cadastro', () => {
   home_page.accessRegisterPage()
  })

  it('Validar campo nome vazio', () => {
    register_page.saveregister()
    register_page.checkMessage('O campo nome deve ser prenchido')
  })

  it('Validar campo e-mail vazio', () => {
    register_page.fillName(user_data.name)
    register_page.saveregister()
    register_page.checkMessage('O campo e-mail deve ser prenchido corretamente')
  })

  it('Validar campo e-mail inválido', () => {
    register_page.fillName(user_data.name)
    register_page.fillEmail('emailinvalido')
    register_page.saveregister()
    register_page.checkMessage('O campo e-mail deve ser prenchido corretamente')
  })

  it('Validar campo e-mail válido', () => {
    register_page.fillName(user_data.name)
    register_page.fillEmail(user_data.email)
    register_page.saveregister()
    register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
  })

  it('Validar campo senha vazio', () => {
    register_page.fillName(user_data.name)      
    register_page.fillEmail(user_data.email)    
    register_page.saveregister()
    register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
  })

  it('Validar campo senha inválido', () => {
    register_page.fillName(user_data.name)
    register_page.fillEmail(user_data.email)
    register_page.fillPassword('12345')
    register_page.saveregister()
    register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
  })

 it('Cadastro realizado com sucesso', () => {
    
    const person = faker.person.fullName()  

    register_page.fillName(person)
    register_page.fillEmail(user_data.email)
    register_page.fillPassword(user_data.password)
    register_page.saveregister()
    register_page.checkRegisterSuccess(person)
    
  })
})