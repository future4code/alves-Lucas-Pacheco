import connection from "./connection"

const selectQuery =async (nickname: string | null): Promise<any> => {
    const result = await connection("ToDoList_Users")
 .select("id", "nickname")
 .where("nickname", nickname)

 return result
}

export default selectQuery