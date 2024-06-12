export default new class Product {
  // Criar um novo produto
  postNewProduct(version, payload){
    return cy.request({
      method: 'POST',
      url: `${Cypress.env('restApiProduct')}${version}/products/`,
      failOnStatusCode: false,
      body: payload
    })
  }

  // Buscar todos ou um único produto
  getProducts(version, id = null){
    return cy.request({
      method: 'GET',
      url: `${Cypress.env('restApiProduct')}${version}/products/${id}`,
      failOnStatusCode: false,
    })
  }

  // Atualizar um produto
  updateProduct(version, id, payload){
    return cy.request({
      method: 'PUT',
      url: `${Cypress.env('restApiProduct')}${version}/products/${id}`,
      failOnStatusCode: false,
      body: payload
    })
  }

  // Excluir um produto
  deleteProducts(version){
    return cy.request({
      method: 'DELETE',
      url: `${Cypress.env('restApiProduct')}${version}/products/${id}`,
      failOnStatusCode: false,
    })
  }
}
