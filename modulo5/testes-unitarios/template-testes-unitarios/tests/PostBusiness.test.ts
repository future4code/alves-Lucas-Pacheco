import { PostBusiness } from "../src/business/PostBusiness"
import { IAddLikeInputDTO, ICreatePostInputDTO, IDeletePostInputDTO, IGetPostsInputDTO, IRemoveLikeInputDTO, Post } from "../src/models/Post"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { PostDatabaseMock } from "./mocks/PostDatabaseMock"

describe("Testando a PostBusiness", () => {
    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("Deve retornar uma lista de post, verificar a quantidade de posts e se post faz parte da classe Post",  async () => {
    const input: IGetPostsInputDTO  = {
        token: "token-mock-normal"
    }

    const response = await postBusiness.getPosts(input) 
    expect(response.posts.length).toBe(3) // Ver a quantidade de Posts que existe no Array.
    expect(response.posts.length).toBeGreaterThan(2) // Verifica se o número de posts é maior que 2
    expect(response.posts.length).toBeLessThan(4) // Verifica se o numero de posts é menor que 4
    expect(response.posts.length).toBeLessThanOrEqual(3) // Verifica se o numero de post é Menor ou igual a 3;
    expect(response.posts[0]).toBeInstanceOf(Post) // Ver se o item 1 do Array posts, é da classe Post.

    })

    test("Deve ser possível criar um novo post, post bem sucedido", async () => {
        const input: ICreatePostInputDTO = {
            token: "token-mock-normal",
            content: "Ódio a humanidade"
        }

        const response = await postBusiness.createPost(input)
        expect(response.message).toBe("Post criado com sucesso") // Mostra a resposta da requisição
        expect(response.post).toBeInstanceOf(Post) // Verifica se existe a classe Post na criação
        expect(response.post.getId()).toBe("id-mock") // Verifica se o id do post é o método getid e é id-mock
        expect(response.post.getContent()).toBe("Ódio a humanidade") // Verifica qual é o conteúdo do post.
        expect(response.post.getLikes()).toBe(0) // Verifica os likes do post criado pela classe ele começa com 0.
        expect(response.post.getUserId()).toBe("id-mock") // Verifica o id do usuário do post
    })

    test("Deve ser possível deletar um post", async () => {
        const input: IDeletePostInputDTO = {
          token: "token-mock-normal",
          postId: "207"
        }

        const response = await postBusiness.deletePost(input)
        expect(response.message).toBe("Post deletado com sucesso") // Verifica se a mensagem de post é a mesma da requisição.     
    })

    test("Deve ser possível adicionar um Like", async () => {
      const input: IAddLikeInputDTO = {
        token: "token-mock-normal",
        postId: "206"
      }

      const response = await postBusiness.addLike(input)

      expect(response.message).toBe("Like realizado com sucesso") // Verifica se o final da requisição está chegando
    })

    test("Deve ser possível tirar um Like", async () => {
        const input: IRemoveLikeInputDTO = {
             token: "token-mock-normal",
             postId: "205"
        }

        const response = await postBusiness.removeLike(input)
        expect(response.message).toBe("Like removido com sucesso") // Verifica se o final da requisição está chegando
    })
})