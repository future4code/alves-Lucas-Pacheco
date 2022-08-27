import connection from "./connection";


const selectTaskForId = async (creatorUserId: string): Promise<any> => {
    const result = await connection("ToDoList_Task")
    .where("ToDoList_Task.user_id", creatorUserId)
    .join("ToDoList_Users", "ToDoList_Task.user_id",  "ToDoList_Users.id ")
    .select("ToDoList_Task.id ", 
    "title", 
    "description", 
    "status", 
    "limit_date", 
    "user_id", 
    "ToDoList_Users.nickname")

    return result
}

export default selectTaskForId