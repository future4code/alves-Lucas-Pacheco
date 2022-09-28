import { UserBusiness } from "../src/business/UserBusiness"
import { BaseError } from "../src/errors/BaseError"
import { ILoginInputDTO, ISignupInputDTO } from "../src/models/User"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { HashManagerMock } from "./mocks/HashManagerMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { UserDataBaseMock } from "./mocks/UserDataBaseMock"


describe("Testando a UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDataBaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )
 //SIGNUP

    test("Um token é retornado quando o cadastro é bem sucedido", async () => {
        const input: ISignupInputDTO = {
            email: "Tayross@gmail.com",
            name: "Tayross",
            password: "Tayross1234"
        }

        const response = await userBusiness.signup(input)
        expect(response.message).toBe("Cadastro realizado com sucesso")
        expect(response.token).toBe("token-mock-normal")
    })

    test("Erro quando 'password' possui menos de 6 caracteres", async () => {
        expect.assertions(2)

        try {
            const input: ISignupInputDTO = {
                email: "Lucao@gmail.com",
                name: "Luquinhas",
                password: "abc"
            }

            await userBusiness.signup(input)

        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'password' inválido: mínimo de 6 caracteres")
            }
        }
    })

    test("Erro quando o o parâmetro 'name' é enviado com menos de 3 caracteres", async () => {
        expect.assertions(2)

        try {
            const input: ISignupInputDTO = {
                email: "Lucao@gmail.com",
                name: "L",
                password: "abc123"
            }

            await userBusiness.signup(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'name' inválido: mínimo de 3 caracteres")
            }
        }
    })

    test("Erro quando Email já existe na hora de se cadastra", async () => {
        expect.assertions(2)

        try {
            const input: ISignupInputDTO = {
                email: "usermock@gmail.com",
                name: "Fulaninho",
                password: "abc1234"
            }

            await userBusiness.signup(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(409)
                expect(error.message).toBe("Email já cadastrado")
            }
        }
    })

    test("Erro o qual parâmetro 'name' não é enviado como string", async () => {
        expect.assertions(2)

        try {
            const input = {
                name: undefined,
                email: "fulaninho@gmail.com",
                password: "abc123"
            } as any

            await userBusiness.signup(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'name' inválido")
            }
        }
        
    })

    test("Erro o qual parâmetro 'email' não é enviado como string", async () => {
       expect.assertions(2)

       try {
        const input = {
            name: "undefined",
            email: undefined,
            password: "abc123"
        } as any
         
        await userBusiness.signup(input)

       } catch (error) {
        if(error instanceof BaseError) {
            expect(error.statusCode).toBe(400)
            expect(error.message).toBe("Parâmetro 'email' inválido")
        }
          
       }
    })

    test("Erro o qual parâmetro 'password' não é enviado como string", async () => {
       expect.assertions(2)

        try {
            const input = {
                name: "Luquinhas",
                email: "lucao@gmail.com",
                password: undefined
            } as any

            await userBusiness.signup(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'password' inválido")
            }
        }
    })

    test("Erro caso seu Email não seja enviado no modelo correto", async () => {
        expect.assertions(2)

      try {
        const input: ISignupInputDTO = {
            email: "hasdhdsahadshasndhbsac",
            name: "Luquinhas",
            password: "Luquinahs123"
        }

        await userBusiness.signup(input)
      } catch (error) {
        if(error instanceof BaseError) {
            expect(error.statusCode).toBe(400)
            expect(error.message).toBe("Parâmetro 'email' inválido")
        }
      }
    })

    //Expect avaliados se o Status code é equivalente ao nosso custom Error, como nossa mensagem também é. No caso de testes de Erro

    //LOGIN

    test("Um token é retornado quando login é bem-sucedido", async () => {
        const input: ILoginInputDTO = {
            email: "astrodev@gmail.com",
            password: "diabinho"
        }

        const response = await userBusiness.login(input)
        expect(response.message).toBe("Login realizado com sucesso")
        expect(response.token).toBe("token-mock-admin")
    })

    test("Erro quando 'password' for incorreto", async () => {
        expect.assertions(2)

        try {
            const input: ILoginInputDTO = {
                email: "astrodev@gmail.com",
                password: "Capeta"
            }

            await userBusiness.login(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Credenciais inválidas")
            }
        }
    })

    test("Erro quando 'email' não for encontrado no banco de dados", async () => {
        expect.assertions(2)

        try {
            const input: ILoginInputDTO = {
                email: "fulano@gmail.com",
                password: "hash-mock"
            }

            await userBusiness.login(input)

        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(404) // Resposta do status code do Erro.
                expect(error.message).toBe("Recurso não encontrado") // Resposta da requisição de Erro
            }
        }
    })

    test("Erro quando 'email' não é passado correta ou seja com @gmail.com entre outros", async () => {
      expect.assertions(2)
      
      try {
        const input: ILoginInputDTO = {
            email: "sadjhsadhsadhsahdashdasd",
            password: "avc1245"
        }

        await userBusiness.login(input)

      } catch (error) {
        if(error instanceof BaseError) {
            expect(error.statusCode).toBe(400)
            expect(error.message).toBe("Parâmetro 'email' inválido")
        }
      }
    })

    test("Erro quando parâmetro 'email' não é passado como string", async () => {
        expect.assertions(2)

        try {
            const input = {
                email: undefined,
                password: "hash-mock"
            } as any

            await userBusiness.login(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'email' inválido")
            }
        }
    })

    test("Erro quando parâmetro 'password' não é passado como string", async () => {
        expect.assertions(2)

        try {
            const input = {
                email: "astrodev@gmail.com",
                password: undefined
            } as any

            await userBusiness.login(input)

        } catch (error) {
            if(error instanceof BaseError) {
            expect(error.statusCode).toBe(400)
            expect(error.message).toBe("Parâmetro 'password' inválido")
            }
        }
    })

    test("Erro quando a password é passada com menos de 6 caracteres", async () => {
        expect.assertions(2)

        try {
            const input: ILoginInputDTO = {
                email: "astrodev@gmail.com",
                password: "avc"
            } 

            await userBusiness.login(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'password' inválido: mínimo de 6 caracteres")
            }
        }
    })
})