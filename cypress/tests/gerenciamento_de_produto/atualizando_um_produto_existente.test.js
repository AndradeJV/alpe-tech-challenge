import Products from "../../support/requests/Products"
import payload from "../../fixtures/gerenciamento_de_produto/atualizando_um_produto_existente.json"
import payloadForCreateNewProduct from "../../fixtures/gerenciamento_de_produto/criando_um_novo_produto.json"


describe('Atualizando um produto existente', () => {
  let lastProductCreated

  beforeEach(() => {
    const payloadCreateNewProductSuccess = payloadForCreateNewProduct.validar_requisicao_com_sucesso

    Products.postNewProduct('v1', payloadCreateNewProductSuccess).then(res => {
      lastProductCreated = res.body.id

      Products.getProducts('v1', lastProductCreated).then(res => {
        expect(res.status).to.eq(200)
        expect(res.body).to.be.exist
        console.log(res.body)
        expect(res.body.title).to.eq('New Product')
        expect(res.body.price).to.eq(10)
        expect(res.body.description).to.eq('A description')
        expect(res.body.images[0]).to.contains(['https://placeimg.com/640/480/any'])
      })
    })
  })

  it('Validar que as informações antigas não constam mais na listagem de produtos', () => {
    // Atualizar produto
    Products.updateProduct('v1', lastProductCreated, payload.newInformation).then(res => {
      expect(res.status).to.eq(200)
      expect(res.body).to.be.exist
      expect(res.body.title).to.eq('Update Product')
      expect(res.body.price).to.eq(16)
      expect(res.body.description).to.eq('New description')
      expect(res.body.images[0]).to.contains(['https://placeimg.com/640/480/any'])
    })

    // Validar que atualização funcionou
    Products.getProducts('v1', lastProductCreated).then(res => {
      expect(res.status).to.eq(200)
      expect(res.body).to.be.exist
      expect(res.body.title).to.eq('Update Product')
      expect(res.body.price).to.eq(16)
      expect(res.body.description).to.eq('New description')
      expect(res.body.images[0]).to.contains(['https://placeimg.com/640/480/any'])
    })
  })

  it('Tentar atualizar um produto inexistente', () => {
    Products.updateProduct('v1', lastProductCreated + 1, payload.newInformation).then(res => {
      expect(res.status).to.eq(400)
      expect(res.body).to.be.exist
    })
  })

  afterEach(() => {
    Products.deleteProducts('v1', lastProductCreated)
  })
})
