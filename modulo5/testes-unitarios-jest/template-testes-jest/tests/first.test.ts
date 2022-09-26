
import {checkeven} from '../exerciciosJest/checkevenNumber'
import {dividingArray} from '../exerciciosJest/dividingarray'
import convertNumber from '../exerciciosJest/ConvertStringNumber'
import {couchString, randomNumber, users, calcAverage, calcAge, formatDate} from '../exerciciosJest/lenght'

describe("Treinando Jest", () => {
    test("Verificação se 102 é par", () => {
        const input = 102 
        const output = checkeven(input)

        expect(output).toBe(true)
    })

    test("Verificando se 303 é impar", () => {
        const input = 303
        const output = checkeven(input)

        expect(output).toBe(false)
    })

    test("Verificando se a Divisão 503 / 3", () => {
        const input = 503 / 3
        const output = Math.floor(input)
        const output2 = checkeven(output)

        expect(output2).toBe(false)
    })

    test("Verificando se Dev é se torna um array de ['d','e', 'v']", () => {
        const input = "dev"
        const output = dividingArray(input)
        expect(output).toEqual(['d', 'e', 'v'])
    })

    test("Verificando se 1456, se torna um array de [1,4,5,6]", () => {
        const input = 1456
        const newInput = input.toString()
        const output = dividingArray(newInput)

        expect(output)
    })

    test("Convertendo o 56 de string para number", () => {
        const input = "56"
        const output = convertNumber(input)

        expect(output).toBe(56)
    })

    test("Mostrando a quantidade de caracteres na palavra sobre", () => {
      const input = "sobre"
      const output = couchString(input)
      expect(output).toBe(5)
    })

    test("Mostrando que a quantidade de caracteres de Jorge é maior que 4", () => {
        const input = "Jorge"
        const output = couchString(input)


        expect(output).toBeGreaterThan(4)
    })

    test("Selencionado um número random entre 1 e 10", () => {
    const output = randomNumber()

    expect(output).toBeGreaterThanOrEqual(1)
    expect(output).toBeLessThanOrEqual(10)
    
    })

    test("Vendo se AstroDev, existe na lista", () => {
        const user =  {
            id: "3",
            name: "Astrodev",
            age: 50
        }
        expect(users).toContainEqual(user)
    })

    test("Recebe um array de número e retorna sua média [10,4,7,6], retorna 7", () => {
        const input = [10,4,7,6]

        const output = calcAverage(input)
        expect(output).toBe(7)
    })

    test("Recebe um array de número e retorna sua média [10,4,7,6], é maior que 5", () => {
        const input = [10,4,7,6]

        const output = calcAverage(input)
        expect(output).toBeGreaterThan(5)
    })

    test("Recebe um array de número e retorna sua média [10,4,7,6], é menor que 8", () => {
        const input = [10,4,7,6]

        const output = calcAverage(input)
        expect(output).toBeLessThan(8)
    })

    test("Recebe ano 2000 e retorna 22", () => {
        const input = 2000
        const output = calcAge(input)

        expect(output).toBe(22)
    })

    test("Recebe ano 2000 e verifica se a idade é menor ou igual que 22", () => {
        const input = 2000
        const output = calcAge(input)

        expect(output).toBeLessThanOrEqual(22)
    })

    
    test("Recebe ano 2000 e verifica se a idade é igual ou maior que 22", () => {
        const input = 2000
        const output = calcAge(input)

        expect(output).toBeGreaterThanOrEqual(22)
    })

    test("Recebe a data 2022/09/22 e retorna 22/09/2022", () => {
        const input = "2022/09/22"
        const output = formatDate(input)

        expect(output).toBe("22/09/2022")
    })



})

