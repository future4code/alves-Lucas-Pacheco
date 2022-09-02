import connection from "./connection"

const selectId = async (id: string): Promise<any> => {
 const result = await connection("ToDoList_Users")
 .select("id", "nickname")
 .where({id: id})

 return result
}

export default selectId