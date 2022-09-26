export const couchString = (s: string): number => {
 const result = s.length

 return result
}

export const randomNumber = (): number => {
    const min = 1
    const max = 10
    const result = Math.floor(Math.random() * (max - min +1)) + min

    return result
}

interface IUser {
    id: string,
    name: string,
    age: number
}

export const users: IUser[] = [
    {
        id: "1",
        name: "Alice",
        age: 20
    },
    {
        id: "2",
        name: "Bob",
        age: 18
    },
    {
        id: "3",
        name: "Astrodev",
        age: 50
    }
]

export const calcAverage = (lista: number[]): number => {
 let totalSum = 0

 for (let n of lista){
    totalSum += n
 }

 const average = Math.ceil(totalSum / lista.length)

 return average
}

export const calcAge = (year: number): number => {
    const correctYear = new Date().getFullYear()
    const age = correctYear - year

    return age
}

export const formatDate = (initialDate: string): string => {
    const date = new Date(initialDate)
    const formattedDate = date.toLocaleDateString()

    return formattedDate
}