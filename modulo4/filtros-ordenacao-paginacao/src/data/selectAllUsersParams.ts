import connection from "./connection"
// export default async function selectAllUsers():Promise<any> {
//     const result = await connection.raw(`
//        SELECT id, name, email, type
//        FROM aula49_exercicio;
//     `)
//     return result[0]
//  }

const selectAllUsersParams = async (type: any): Promise<any> => {
    const result = await connection("aula49_exercicio")
    .select("id", "name", "email", "type")
    .where("type", "LIKE", `%${type}%`)

    return result
}

export default selectAllUsersParams