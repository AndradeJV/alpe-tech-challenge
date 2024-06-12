# Desafio técnico - ALPE🚀

## Tecnologias usadas🌐
- Cypress

## Como instalar, pré requisitos, execução de testes📦
### Pré requisitos📋
- Ter Node e NPM instalado na máquina (foi usado a versão 20 LTS do node)

### Instalação e execução dos testes🔧
1. Clonar repositório
2. Executar `npm i` para instalar as dependências
3. Executar `npx cypress open` para abrir o menu do cypress ou `npx cypress run` para executar todos os testes disponíveis

- Em caso de execução somente de uma feature basta informar o parâmetro spec (exemplo): `npx cypress run --spec ./cypress/tests/gerenciamento_de_produto/criando_novo_produto.test.js`

[Aqui](https://docs.google.com/document/d/1xmGtMWXYFbNNZSihAHx5MgQI2z1PnNfGk9_DlWoNpec/edit?usp=sharing) 📁 você pode encontrar os casos de testes descritos!


## Descrição de pastas e arquivos📄
- cypress: toda organização dos arquivos cypress
- fixtures: massa de dados dos testes organizando por cenário.
  A criação do nome DEVE seguir o mesmo nome do cenário
- support: configurações de plugins, scripts e requisições para evitar repetições de código
  requests: arquivos de requisição
  commands.js: scripts para executar de forma "padrão" o cypress
  e2e.js: execuções ou criação de scripts para execução de forma "padrão" do cypress
- tests: scripts de testes em execução
- node_modules: arquivos do node e dependências
- .gitignore: arquivos que não serão gerenciados pelo git
- cypress.config.js: arquivo de configurações do cypress
- package.lock.json: arquivo de dependências
- package.json: arquivo de dependências e configurações do projeto node
- README.md: documentação do projeto


---

## Informações gerais📘

* Poderia haver necessidade de criação de scripts para front-end que seria uma pasta Views com pages e components. E também poderia existir uma pasta para configurar conexão com um ou mais banco de dados.
* Em caso de informações sigilosas poderia haver um arquivo que o cypress recomenda para usar que seria o cypress.env.

* Para esse projeto não utilizei CI/CD mas já trabalhei com Github actions, Gitlab CI, CircleCI e Azure Devops
