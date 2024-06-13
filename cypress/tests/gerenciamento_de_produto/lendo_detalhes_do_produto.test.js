import Products from "../../support/requests/Products"
import payload from "../../fixtures/gerenciamento_de_produto/lendo_detalhes_do_produto.json"
import payloadForCreateNewProduct from "../../fixtures/gerenciamento_de_produto/criando_um_novo_produto.json"


describe('Lendo detalhes de um produto', () => {
  let lastProductCreated

  beforeEach(() => {
    const payloadCreateNewProductSuccess = payloadForCreateNewProduct.validar_requisicao_com_sucesso

    Products.postNewProduct('v1', payloadCreateNewProductSuccess).then(res => {
      lastProductCreated = res.body.id
    })
  })


  it('Validar informações quando informar um único produto existente', () => {
    Products.getProducts('v1', lastProductCreated).then(res => {
      expect(res.status).to.eq(200)
      expect(res.body).to.be.exist
    })
  })

  it('Validar informações quando buscar todos os produtos existentes', () => {
    Products.getProducts('v1').then(res => {
      expect(res.status).to.eq(200)
      expect(res.body).to.be.exist
      expect(res.body[0].id).to.be.exist
    })
  })

  it('Validar erro quando buscar por um produto que não existe na base', () => {
    Products.getProducts('v1', lastProductCreated + 1).then(res => {
      expect(res.status).to.eq(400)
      expect(res.body).to.be.exist
      expect(res.body.message).to.contains('Could not find any entity of type')
    })
  })

  afterEach(() => {
    Products.deleteProducts('v1', lastProductCreated)
  })
})
