import ShowBusiness from "../src/Business/ShowBusiness"
import { BaseError } from "../src/error/BaseError"
import { ICreateShowInputDTO, IDeleteReservationShowInputDTO, IGetShowsInputDTO, IReservationShowInputDTO } from "../src/interface/Showinterface"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { GenerateIdMock } from "./mocks/GenerateIdMock"
import { ShowDataBaseMock } from "./mocks/ShowDataBaseMock"


describe("Testando a ShowBusiness", () => {
    const showBusiness = new ShowBusiness(
        new ShowDataBaseMock(),
        new GenerateIdMock(),
        new AuthenticatorMock()
    )

    //-------------------------------------------- Create Show --------------------------------------------- -//
     
    test("Deve retorna uma mensagem de sucesso caso o show seja criado", async () => {
        const input: ICreateShowInputDTO = {
            token: "token-mock-admin",
            band: "Link-Park-Mockzinho",
            starts_at: "29/12/2022"
        }
        const response = await showBusiness.createShow(input)

        expect(response.message).toBe("Show criado com sucesso")  
    })

    test("Erro quando um dos parâmetros não é passado", async () => {
        expect.assertions(2)

        try {
            const input = {
                token: "token-mock-admin",
                band: undefined,
                starts_at: "29/12/2022"
            } as any

            await showBusiness.createShow(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetros não foram enviados, ou estão faltando")
            }
        }
    })

    test("Erro quando o Token não é encontrado no banco de dados", async () => {
    expect.assertions(2)

    try {
        const input: ICreateShowInputDTO = {
            token: "Token-errado",
            band: "Baninha",
            starts_at: "29/12/2022"
        }

        await showBusiness.createShow(input)
    } catch (error) {
        if(error instanceof BaseError) {
            expect(error.statusCode).toBe(401)
            expect(error.message).toBe("Credenciais inválidas")
        }
    }
    })

    test("Erro quando o usuário que tenta criar a banda, não é admin", async () => {
        expect.assertions(2)

        try {
            const input: ICreateShowInputDTO = {
                token: "token-mock-normal",
                band: "Link-Park-Mockzinho",
                starts_at: "29/12/2022"
            }

            await showBusiness.createShow(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(403)
                expect(error.message).toBe("Permissão insuficiente")
            }
        }
    })

    test("Erro quando a banda não é passada em formato string", async () => {
        expect.assertions(2)
        try {
            const input = {
                token: "token-mock-admin",
                band: 5,
                starts_at: "29/12/2022"
            } as any 

            await showBusiness.createShow(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmentro 'band' inválido")
            }
        }
    })

    test("Erro quando a 'starts_at' não é uma string", async () => {
        expect.assertions(2)

        try {
            const input = {
                token: "token-mock-admin",
                band: "Link-Park-Mockzinho",
                starts_at: true
            } as any 

            await showBusiness.createShow(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'startsAt' inválido")
            }
        }
    })

    test("Erro quando se tenta criar um show antes da iniciação do festival", async () => {
        expect.assertions(2)

        try {
            const input: ICreateShowInputDTO = {
                token: "token-mock-admin",
                band: "Link-Park-Mockzinho",
                starts_at: "01/12/2022"
            }

            await showBusiness.createShow(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Data do show não pode-se anterior ao dia do festival")
            }
        }
    })

    test("Erro quando se tenta criar um show após o fim do festival", async () => {
        expect.assertions(2)

        try {
            const input: ICreateShowInputDTO = {
                token: "token-mock-admin",
                band: "Link-Park-Mockzinho",
                starts_at: "01/02/2023"
            }

            await showBusiness.createShow(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Data do show não pode-se posterior ao fim do evento")
            }
        }
    })

 
    //-------------------------------------------- GettAllPosts ------------------------------------------- -//
     
    test("Deve retornar uma lista de shows em caso de sucesso", async () => {
        const input: IGetShowsInputDTO = {
            token: "token-mock-normal"
        }

        const response = await showBusiness.getAllShows(input)

        expect(response.shows.length).toBe(3)
    })

    test("Erro se o token não for enviado da maneira correta", async () => {
        expect.assertions(2)

        try {
            const input = {
                token: 5
            } as any 

          await showBusiness.getAllShows(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Credenciais inválidas")
            }


        }
    })

    test("Erro quando o token não é encontrado no banco de dados", async () => {
        expect.assertions(2)

        try {
            const input: IGetShowsInputDTO = {
                token: "Token-errado"
            }

            await showBusiness.getAllShows(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Credenciais inválidas")
            }


        }
    })

    //-------------------------------------------- Rerserve Ticket ------------------------------------------- -//
    
    test("Deve retorna uma mensagem, caso a reserva seja feita com sucesso", async () => {
        const input: IReservationShowInputDTO = {
            id: "207",
            token: "token-mock-normal"
        }

        const response = await showBusiness.reserveTicket(input)

        expect(response.message).toBe("Ticket foi comprado com sucesso")
    })


    test("Erro caso o Token não seja encontrado dentro do banco de dados", async () => {
        expect.assertions(2)

        try {
            const input: IReservationShowInputDTO = {
                token: "Ta-Errado",
                id: "207"
            }

            await showBusiness.reserveTicket(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Credenciais inválidas")
            }


        }
    })

    test("Erro caso o id do show enviado, não foi encontrado no banco de dados", async () => {
      expect.assertions(2)

      try {
        const input: IReservationShowInputDTO = {
            id: "20545",
            token: "token-mock-normal"
        }
                
        await showBusiness.reserveTicket(input)
      } catch (error) {
        if(error instanceof BaseError) {
            expect(error.statusCode).toBe(400)
            expect(error.message).toBe("Show não encontrado")
        }


      }
    })

    test("Erro caso o usuário já tenha reservado o show em questão", async () => {
        expect.assertions(2)

        try {
            const input: IReservationShowInputDTO = {
                id: "205",
                token: "token-mock-normal"
            }

            await showBusiness.reserveTicket(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Você já reservou para este show")
            }


        }
    })

    test("Erro caso um dos parâmetros não seja passado de maneira correta", async () => {
        expect.assertions(2)

        try {
            const input = {
                id: undefined,
                token: "token-mock-normal"
            } as any 

            await showBusiness.reserveTicket(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetros não foram enviados, ou estão faltando")
            }

        }
    })

    //-------------------------------------------- Delete Reserve  ------------------------------------------- -//
    
    test("Deve retorna uma mensagem, caso a reserva seja removida com sucesso", async () => {
        const input: IDeleteReservationShowInputDTO = {
            id: "205",
            token: "token-mock-normal"
        }

       const response = await showBusiness.deleteReserve(input)

        expect(response.message).toBe("Você retirou sua reserva")
    })

    test("Erro caso um dos parâmetros não seja passado de maneira correta no delete da Reserva", async () => {
        expect.assertions(2)

        try {
            const input = {
                id: undefined,
                token: "token-mock-normal"
            } as any 

            await showBusiness.deleteReserve(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetros não foram enviados, ou estão faltando")
            }

        }
    })

    test("Erro caso o o paylaoad não seja encontrado no banco de dados", async () => {
        expect.assertions(2)

        try {
            const input: IDeleteReservationShowInputDTO = {
                token: "Token-Errado",
                id: "205"
            } 

            await showBusiness.deleteReserve(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Credenciais inválidas")
            }
        }


    })

    test("Erro caso o id do show enviado, não foi encontrado no banco de dados", async () => {
        expect.assertions(2)
  
        try {
          const input: IDeleteReservationShowInputDTO = {
              id: "20545",
              token: "token-mock-normal"
          }
                  
          await showBusiness.deleteReserve(input)
        } catch (error) {
          if(error instanceof BaseError) {
              expect(error.statusCode).toBe(400)
              expect(error.message).toBe("Show não encontrado")
          }
  
  
        }
    })

    test("Erro caso o usuário já tenha reservado o show em questão", async () => {
        expect.assertions(2)

        try {
            const input: IReservationShowInputDTO = {
                id: "207",
                token: "token-mock-normal"
            }

            await showBusiness.deleteReserve(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Você não reservou esse show")
            }


        }
    })
})