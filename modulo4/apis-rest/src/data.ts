export type User = {
  id: number,
  name: string,
  email: string,
  type: Type,
  age: Number
}

export enum Type {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

// export type NewUser = User & {type: Type}


export let users: User[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: Type.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: Type.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: Type.ADMIN,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: Type.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: Type.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: Type.ADMIN,
        age: 60
    }

]