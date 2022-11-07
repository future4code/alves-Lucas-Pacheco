
import CompetitionBusiness from "../src/business/CompetitionBusiness"
import { IAtualizationCompetitorValue, ICompetitionNameInputDTO, IFinalizationCompetitionInputDTO, IGetResultInputDTO, IRegistrationCompetitorInputDTO } from "../src/interface/Competition"
import { CompetitionDataBaseMock } from "./mocks/CompetitionDataBaseMock"
import { GenerateIdMock } from "./mocks/services/GenerateIdMock"


describe("Testando a CompetitionBusiness", () => {
    const competitionBusiness = new CompetitionBusiness(
        new CompetitionDataBaseMock(),
        new GenerateIdMock
    )


    test("testando CreateCompetition", async () => {

        const input: ICompetitionNameInputDTO = {
            competition: "Mock-Competição!"
        }

        const response = await competitionBusiness.CreateCompetition(input)
        
        expect(response.message).toBe("Competição cadastrada com sucesso")
    })

    test("testando registrationCompetitor", async () => {
        
        const input: IRegistrationCompetitorInputDTO = {
            competition_name: "Corrida de 100 metros",
            atleta: "Carlinhos",
            value: 500,
            unidade: "m"
        }

        const response = await competitionBusiness.registerCompetitor(input)

        expect(response.message).toBe("Competidor cadastrado")
    })

    test("Testando finalizationCompetiton", async () => {
        const input: IFinalizationCompetitionInputDTO = {
            competition_name: "Corrida de 100 metros"
        }

        const response = await competitionBusiness.finalizationCompetition(input)

        expect(response.message).toBe("Sua competição foi finalizada")
    })


    test("Testando getAllResults", async () => {
        const input: IGetResultInputDTO = {
        competition_name: "Dardo semifinal",
        search : "",
        order : "value",
        sort : "ASC",
        limit :  "10",
        page : "1",
        }

        const response = await competitionBusiness.getAllResults(input)

        expect(response.competitors.length).toBe(2)
    })

    test("Testando atualizationResults", async () => {

     const input: IAtualizationCompetitorValue = {
        atleta: "Carlos",
        value: 100.000
     }

     const response = await competitionBusiness.atualizationResults(input)

     expect(response.message).toBe("Colocação atualizada")
        
    })
})