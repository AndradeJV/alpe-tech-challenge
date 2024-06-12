import Products from "../../support/requests/Products";
import payload from "../../fixtures/gerenciamento_de_produto/criando_um_novo_produto.json"


describe('Criando um novo produto', () => {
  it('Validar que campo de preço deve ser maior que 1', () => {
    const dataPayload = payload.validar_preco_maior_que_um

    Products.postNewProduct('v1', dataPayload).then(res => {
      expect(res.status).to.eq(400)
      expect(res.body.message).contains('price must be a positive number')
    })
  })

  it('Validar quando enviar payload vazio', () => {
    const dataPayload = payload.validar_payload_vazio

    Products.postNewProduct('v1', dataPayload).then(res => {
      expect(res.status).to.eq(400)
      expect(res.body.message).contains('title should not be empty')
      expect(res.body.message).contains('title must be a string')
      expect(res.body.message).contains('price should not be empty')
      expect(res.body.message).contains('description should not be empty')
      expect(res.body.message).contains('description must be a string')
      expect(res.body.message).contains('price must be a positive number')
    })
  })

  it('Validar que campos numéricos não aceitam caracteres especiais', () => {
    const dataPayload = payload.validar_campos_numericos

    Products.postNewProduct('v1', dataPayload).then(res => {
      expect(res.status).to.eq(400)
      expect(res.body.message).to.contains('price must be a positive number')
      expect(res.body.message).to.contains('categoryId must be a number conforming to the specified constraints')
    })
  })

  it('Validar erro quando informar uma categoria inexistente', () => {
    const dataPayload = payload.validar_categoria_inexistente

    Products.postNewProduct('v1', dataPayload).then(res => {
      expect(res.status).to.eq(400)
      expect(res.body.message).to.eq('Could not find any entity of type "Category" matching: {\n    "id": 9\n}')
    })
  })

  it('Validar requisição com sucesso', () => {
    const dataPayload = payload.validar_requisicao_com_sucesso

    Products.postNewProduct('v1', dataPayload).then(res => {
      expect(res.status).to.eq(201)
      // Com acesso ao banco, daria para realizar uma consulta para verificar a existência no banco


      /* Exemplo em SQL server
       cy.task('execQuery', {
          query: SELECT * TOP 1 FROM Product ORDER BY id DESC
          database: connection
       }).then(res => {
        // expect(res.recordset[0].id).to.be.exist
        })
      */


      expect(res.body.id).to.be.exist
      expect(res.body.title).to.eq("New Product")
      expect(res.body.price).to.eq(10)
      expect(res.body.category).to.be.exist
      expect(res.body.category.name).to.eq("Miscellaneous")
      expect(res.body.images).to.be.exist
    })
  })
})