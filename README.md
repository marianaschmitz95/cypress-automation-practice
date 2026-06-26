# 🧪 AutomationPractice — Portfólio de Quality Assurance

Bem-vindo ao meu repositório de testes automatizados! Aqui documento minha prática em **Quality Assurance com Automação**, cobrindo cenários de cadastro de usuário da aplicação [AutomationPractice](https://www.automationpratice.com.br/) com testes end-to-end utilizando Cypress.

---

## 🧑‍💼 Sobre mim

Sou a Mariana, QA Analyst apaixonada por qualidade de software. Este repositório reflete minha jornada na área, com foco em testes automatizados, boas práticas de automação e estruturação de projetos com Page Objects.

**Mariana — QA Analyst**
[LinkedIn](https://www.linkedin.com/in/mariana-schmitz-qa/) | [GitHub](https://github.com/marianaschmitz95)

---

## 📋 Sobre o Projeto

O AutomationPractice é uma aplicação web criada para fins de prática em QA. Os testes aqui desenvolvidos cobrem o fluxo de cadastro de usuário, validando mensagens de erro, campos obrigatórios e o fluxo de sucesso.

🔗 Site testado: [automationpratice.com.br](https://www.automationpratice.com.br/)

---

## 📁 Módulos Testados

| Módulo | Casos de Teste | ✅ Passed | ❌ Failed | Taxa de Sucesso |
|---|---|---|---|---|
| Cadastro de Usuário | 7 | 7 | 0 | 100% |

---

## 🗂️ Estrutura do Projeto
cypress/ ├── e2e/ │ └── cadastro.cy.js # Arquivo de testes ├── fixtures/ │ └── desafio_valid_data.json # Dados de teste └── support/ ├── pages/ │ ├── home_page.js # Page Object - Home │ └── register_page.js # Page Object - Cadastro ├── commands/ │ ├── home_page_commands.js │ └── register_page_commands.js └── e2e.js

Cada módulo contém:

- 📋 **Casos de Teste** — cenários positivos e negativos com validação de mensagens
- 🏗️ **Page Objects** — separação de responsabilidades entre seletores e ações
- ⚡ **Custom Commands** — comandos reutilizáveis registrados no Cypress
- 🎲 **Faker.js** — geração de dados dinâmicos para evitar duplicidade

---

## 🔍 Cenários Testados

| # | Cenário | Tipo | Resultado |
|---|---|---|---|
| 1 | Validar campo nome vazio | Negativo | ✅ |
| 2 | Validar campo e-mail vazio | Negativo | ✅ |
| 3 | Validar campo e-mail inválido | Negativo | ✅ |
| 4 | Validar campo e-mail válido sem senha | Negativo | ✅ |
| 5 | Validar campo senha vazio | Negativo | ✅ |
| 6 | Validar campo senha com menos de 6 dígitos | Negativo | ✅ |
| 7 | Cadastro realizado com sucesso | Positivo | ✅ |

---

## 🛠️ Ferramentas Utilizadas

- 🧪 **Cypress** — framework de automação de testes end-to-end
- 🟨 **JavaScript** — linguagem utilizada nos testes
- 🎲 **Faker.js** — geração de dados dinâmicos e aleatórios
- 🏗️ **Page Objects** — padrão de design para organização dos testes
- 🐙 **Git & GitHub** — versionamento e portfólio

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [Git](https://git-scm.com/) instalado

### Instalação


bash
Copiar

# Clone o repositório
git clone https://github.com/marianaschmitz95/cypress-automation-practice.git

# Acesse a pasta do projeto
cd cypress-automation-practice

# Instale as dependências
npm install




### Executando os Testes


bash
Copiar

# Abre a interface gráfica do Cypress
npx cypress open

# Roda os testes em modo headless (terminal)
npx cypress run




---

## 📊 Resumo Geral

| Total de casos | ✅ Passed | ❌ Failed | Taxa geral |
|---|---|---|---|
| 7 | 7 | 0 | 100% |

---

## 📬 Contato

Caso queira trocar uma ideia ou acompanhar minha jornada:

- 💼 [LinkedIn](https://www.linkedin.com/in/mariana-schmitz-qa/)
- 📧 marianaschmitz95@gmail.com
- 🐙 [GitHub](https://github.com/marianaschmitz95)
