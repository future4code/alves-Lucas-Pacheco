import connection from "./connection";

const selectTask = async (id: string): Promise<any> => {
     

    const result = await connection("ToDoList_Task")
    .where("ToDoList_Task.id", id)
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

export default selectTask


// const selectId = async (id: string): Promise<any> => {
//     const result = await connection("ToDoList_Users")
//     .select("id", "nickname")
//     .where({id: id})
   
//     return result
//    }
   
//    export default selectId