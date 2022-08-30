

import connection from "./connection"
// export default async function selectAllUsers():Promise<any> {
//     const result = await connection.raw(`
//        SELECT id, name, email, type
//        FROM aula49_exercicio;
//     `)
//     return result[0]
//  }

const selectAllUsers = async (name: any, sort: string, order: string, size: number, offset: number): Promise<any> => {
   
    if(!(sort === "name" || sort === "email")) {
        sort = "email"
     }

     if(!(!order || order.toUpperCase() === "ASC" || order.toUpperCase() === "DESC")) {
        order = "ASC"
     }

    const result = await connection("aula49_exercicio")
    .select("id", "name", "email", "type")
    .where("name", "LIKE", `%${name}%`)
    .orderBy(sort, order)
    .limit(size)
    .offset(offset)

    return result
}

export default selectAllUsers