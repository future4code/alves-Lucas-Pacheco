import UserBusiness from "../src/Business/UserBusiness"
import { BaseError } from "../src/error/BaseError"
import { ILoginInputDTO, ISignupInputDTO } from "../src/interface/UserInterface"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { GenerateIdMock } from "./mocks/GenerateIdMock"
import { HashManagerMock } from "./mocks/HashManagerMock"
import { UserDataBaseMock } from "./mocks/UserDataBaseMock"


describe("Testando a UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDataBaseMock(),
        new GenerateIdMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )
 
    // --------------------------------------------- SIGNUP -------------------------------------------------  //

    test("Um token é retornado quando o cadastro tem sucesso", async () => {
        const input: ISignupInputDTO = {
            email: "Tayross@gmail.com",
            name: "Tayross",
            password: "Tayross124345"
        }

        const response = await userBusiness.signup(input)
        expect(response.message).toBe("Usuário criado com sucesso")
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
                expect(error.message).toBe("Parâmetro 'password' inválido")
            }
        }
    })

    test("Erro quando 'password' não é passado como string", async () => {
        expect.assertions(2)

        try {
            const input = {
                email: "Lucao@gmail.com",
                name: "Luquinhas",
                password: 5
            } as any

            await userBusiness.signup(input)
            
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'password' inválido")
            }
        }
    })

    test("Erro quando 'name' não é passado ou vem undefined, ou é passado com 2 ou menos caracteres", async () => {
        expect.assertions(2)

        try {
            const input: ISignupInputDTO = {
                email: "Lucao@gmail.com",
                name: "L",
                password: "Luquinhas123"
            }

            await userBusiness.signup(input)

        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'name' inválido")
            }
        }
    })

    test("Erro quando 'email' não é passado como string", async () => {
        expect.assertions(2)

        try {
            const input = {
                email: 6,
                name: "Lucao",
                password: "Luquinhas2445"
            } as any

            await userBusiness.signup(input)

        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'email' inválido")
            }
        }
    })

    test("Erro quando o 'email' não é passado no formato correto", async () => {
        expect.assertions(2)

        try {
            const input: ISignupInputDTO = {
                email: "Lucaoassfgsfdsafsafsafsafsagmail.com",
                 name: "Luquinhas",
                 password: "abc"
           } 
 
           await userBusiness.signup(input)
        } catch (error) {
              if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Email passado em formato inválido")
            }
        }
    })

    test("Erro quando o email já existe dentro do banco de dados", async () => {
       expect.assertions(2)

       try {
        const input: ISignupInputDTO = {
            email: "usermock@gmail.com",
            name: "Usuário-Errado",
            password: "231313asdasdccD"
        }

        await userBusiness.signup(input)
       } catch (error) {
        if(error instanceof BaseError) {
            expect(error.statusCode).toBe(400)
            expect(error.message).toBe("Email já cadastrado")
        } 
       }
    })

    test("Erro quando Name, ou email, ou password, não é passado", async () => {
      expect.assertions(2)
      
      try {
        const input = {
            email: "Lucas@gmail.com",
            password: "asdsa12314"
        } as any

        await userBusiness.signup(input)

      } catch (error) {
        if(error instanceof BaseError) {
            expect(error.statusCode).toBe(400)
            expect(error.message).toBe("Parâmetros não foram enviados, ou estão faltando")
        } 
      }
    })

    
   // ------------------------------------------------- LOGIN ----------------------------------------------- //
    
   test("Um token é retornado quando o login é efetuado com sucesso", async () => {
     const input: ILoginInputDTO = {
        email: "astrodev@gmail.com",
        password: "batatinha"
     }

    const response =  await userBusiness.login(input)

    expect(response.access_token).toBe("token-mock-admin")
    expect(response.message).toBe("Login realizado com sucesso")
   })

   test("Erro quando um dos parâmetros não é passado", async () => {
   expect.assertions(2)
    try {
        const input = {
            password: "batatinha"
        } as any
    
        await  userBusiness.login(input)

   } catch (error) {
    if(error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetros não foram enviados, ou estão faltando")
    } 
   }
   })

   test("Erro quando 'email' não é passado como uma string", async () => {
    expect.assertions(2)

    try {
        const input = {
            email: 5,
            password: "batatinha"
        } as any

        await userBusiness.login(input)
    } catch (error) {
        if(error instanceof BaseError) {
            expect(error.statusCode).toBe(400)
            expect(error.message).toBe("Parâmetro 'email' inválido")
        }
    }
   })
   
   test("Erro quando 'email' não é passado no formato certo", async () => {
    expect.assertions(2)

    try {
        const input: ILoginInputDTO = {
            email: "ashdashdhsadhsahdsahdasd",
            password: "batatinha"
        }
        await userBusiness.login(input)

    } catch (error) {
        if(error instanceof BaseError) {
            expect(error.statusCode).toBe(400)
            expect(error.message).toBe("Email passado em formato inválido")
        }
    }
   })

   test("Erro quando password não é passado em formato de string", async () => {
    expect.assertions(2)

    try {
        const input = {
            email: "astrodev@gmail.com",
            password: 5
        } as any

        await userBusiness.login(input)

    } catch (error) {
        if(error instanceof BaseError) {
            expect(error.statusCode).toBe(400)
            expect(error.message).toBe("Parâmetro 'password' inválido")
        }
    }
   })

   test("Erro quando a password não é passado com 6 caracteres", async () => {
    expect.assertions(2)

    try {
        const input: ILoginInputDTO = {
            email: "astrodev@gmail.com",
            password: "bat"
        }

        await userBusiness.login(input)

    } catch (error) {
        if(error instanceof BaseError) {
            expect(error.statusCode).toBe(400)
            expect(error.message).toBe("Parâmetro 'password' inválido")
        }
    }
   })

   test("Erro quando o email não é encontrado no banco de dados", async () => {
    expect.assertions(2)

    try {
        const input: ILoginInputDTO = {
         email: "Batatinhaquente@gmail.com",
         password: "batatinha"
        }

        await userBusiness.login(input)
    } catch (error) {
        if(error instanceof BaseError) {
            expect(error.statusCode).toBe(404)
            expect(error.message).toBe("Recurso não encontrado")
        }
    }
   })

   test("Erro caso a password não seja correta", async () => {
    expect.assertions(2)

    try {
        const input: ILoginInputDTO = {
            email: "astrodev@gmail.com",
            password: "mockando-errado"
        }

        await userBusiness.login(input)
    } catch (error) {
        if(error instanceof BaseError) {
            expect(error.statusCode).toBe(401)
            expect(error.message).toBe("Credenciais inválidas")
        }
    }
   })


})

