import Products from "../../support/requests/Products"
import payload from "../../fixtures/gerenciamento_de_produto/atualizando_um_produto_existente.json"
import payloadForCreateNewProduct from "../../fixtures/gerenciamento_de_produto/criando_um_novo_produto.json"


describe('Atualizando um produto existente', () => {
  let lastProductCreated

  beforeEach(() => {
    const payloadCreateNewProductSuccess = payloadForCreateNewProduct.validar_requisicao_com_sucesso

    Products.postNewProduct('v1', payloadCreateNewProductSuccess).then(res => {
      lastProductCreated = res.body.id
    })
  })

  it('Deletando um produto existente', () => {
    Products.deleteProducts('v1', lastProductCreated).then(res => {
      expect(res.status).to.eq(200)
    })

    // Validar que exclusão funcionou
    Products.getProducts('v1', lastProductCreated).then(res => {
      expect(res.status).to.eq(400)
    })
  })

  it('Tentar deletar um produto inexistente na listagem', () => {
    Products.deleteProducts('v1', lastProductCreated + 1).then(res => {
      expect(res.status).to.eq(400)
    })
  })
})
