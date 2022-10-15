import { PostBusiness } from "../src/business/PostBusiness"
import { BaseError } from "../src/errors/BaseError"
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
    // GET POSTS

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

    test("Erro quando token enviado, não for encontrado o payload no banco de dados", async () => {
      expect.assertions(2)
       try {
        const input : IGetPostsInputDTO = {
            token: "tokenzinho"
        }

        await postBusiness.getPosts(input)
      } catch (error) {
        if(error instanceof BaseError) {
            expect(error.statusCode).toBe(401)
            expect(error.message).toBe("Credenciais inválidas")
        }
      }
        
    
    })
    
    //Create POST 

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

    test("Erro, quando o token enviado, não for encontrado no banco de dados", async () => {
        expect.assertions(2)
        try {
            const input: ICreatePostInputDTO = {
                token: "token-mock-não-funcional",
               content: "Ódio a humanidade"
            }

            await postBusiness.createPost(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Credenciais inválidas")
            }
        }
    })
    
    test("Erro quando o 'content' não é passado em formato de string", async () => {
        expect.assertions(2)

        try {
            const input = {
            token: "token-mock-normal",
            content: undefined
            } as any

            await postBusiness.createPost(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'content' inválido")
            }
        }
    })

    test("Erro quando o 'content' é inválido se seu conteúdo tiver menos que 1 caracter", async () => {
     expect.assertions(2)

     try {
        const input: ICreatePostInputDTO = {
            token: "token-mock-normal",
            content: ""
        }

        await postBusiness.createPost(input)
     } catch (error) {
        if(error instanceof BaseError) {
            expect(error.statusCode).toBe(400)
            expect(error.message).toBe("Parâmetro 'content' inválido: mínimo de 1 caracteres")
        }        
     }
    })


    //DELETE POST

    test("Deve ser possível deletar um post", async () => {
        const input: IDeletePostInputDTO = {
          token: "token-mock-normal",
          postId: "207"
        }

        const response = await postBusiness.deletePost(input)
        expect(response.message).toBe("Post deletado com sucesso") // Verifica se a mensagem de post é a mesma da requisição.     
    })

    test("Erro quando o token não é encontrado no banco de dados", async () => {
      expect.assertions(2)
      try {
        const input: IDeletePostInputDTO = {
            token: "token-errado",
            postId: "207"
          } 
    
          await postBusiness.deletePost(input)
      } catch (error) {
        if(error instanceof BaseError) {
            expect(error.statusCode).toBe(401)
            expect(error.message).toBe("Credenciais inválidas")
        }
      }
    })

    test("Erro quando post não for encontrado no banco de dados", async () => {
       expect.assertions(2)
        try {
            const input: IDeletePostInputDTO = {
                token: "token-mock-normal",
                postId: "20543"
            }

            await postBusiness.deletePost(input)
       } catch (error) {
        if(error instanceof BaseError) {
            expect(error.statusCode).toBe(404)
            expect(error.message).toBe("Post não encontrado")
        }
       }
    })

    test("Erro quando usuário não possui permissão para deletar um post", async () => {
        expect.assertions(2)

        try {
            const input: IDeletePostInputDTO = {
                token: "token-mock-normal",
                postId: "205"
              }

              await postBusiness.deletePost(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(403)
                expect(error.message).toBe("Permissão insuficiente")
            }
        }
    })



    // ADD LIKE

    test("Deve ser possível adicionar um Like", async () => {
      const input: IAddLikeInputDTO = {
        token: "token-mock-normal",
        postId: "206"
      }

      const response = await postBusiness.addLike(input)

      expect(response.message).toBe("Like realizado com sucesso") // Verifica se o final da requisição está chegando
    })

    test("Erro quando o token não é encontrado no banco de dados", async () => {
      try {
        const input: IAddLikeInputDTO = {
            token: "tokenzinho feio",
            postId: "206"
        }

        await postBusiness.addLike(input)
      } catch (error) {
        if(error instanceof BaseError) {
            expect(error.statusCode).toBe(401)
            expect(error.message).toBe("Credenciais inválidas")
        }
      }
    })
    
    test("Erro quando o post não é encontrado no banco de dados", async () => {
        expect.assertions(2)
        try {
            const input: IAddLikeInputDTO = {
                token: "token-mock-normal",
                postId: "201241"
              }

              await postBusiness.addLike(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(404)
                expect(error.message).toBe("Post não encontrado")
            }
        }
    })

    test("Erro quando o like já tiver sido dado", async () => {
        expect.assertions(2)

        try {
            const input: IAddLikeInputDTO = {
                token: "token-mock-normal",
                postId: "205"
              }

              await postBusiness.addLike(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(409)
                expect(error.message).toBe("Já deu like")
            }
        }
    })

    //DISLIKE POST 

    test("Deve ser possível tirar um Like", async () => {
        const input: IRemoveLikeInputDTO = {
             token: "token-mock-normal",
             postId: "205"
        }

        const response = await postBusiness.removeLike(input)
        expect(response.message).toBe("Like removido com sucesso") // Verifica se o final da requisição está chegando
    })

    test("Erro quando o token não é encontrado no banco de dados", async () => {
        expect.assertions(2)

        try {
            const input: IRemoveLikeInputDTO = {
                token: "token",
                postId: "205"
            }

            await postBusiness.removeLike(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Credenciais inválidas")
            }
        }
    })

    test("Erro quando post não for encontrado no nosso banco de dados", async () => {
        expect.assertions(2)
        try {
            const input: IRemoveLikeInputDTO = {
                token: "token-mock-normal",
                postId: "201241"
              }

              await postBusiness.removeLike(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(404)
                expect(error.message).toBe("Post não encontrado")
            }
        }
    })

    test("Erro quando o usuário não deu like no post em questão", async () => {
    expect.assertions(2)

    try {
        const input: IRemoveLikeInputDTO = {
            token: "token-mock-normal",
            postId: "206"
        }
        await postBusiness.removeLike(input)
    } catch (error) {
        if(error instanceof BaseError) {
            expect(error.statusCode).toBe(404)
            expect(error.message).toBe("Ainda não deu like")
        }
    }
    })

       
})