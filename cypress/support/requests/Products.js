export default new class Product {
  postNewProduct(version, payload){
    return cy.request({
      method: 'POST',
      url: `${Cypress.env('restApiProduct')}${version}/products/`,
      failOnStatusCode: false,
      body: payload
    })
  }
}