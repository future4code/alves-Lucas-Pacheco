import connection from "./connection";

const createTask = async (id: string, title: string, description: string, limitDate: string, creatorUserId: string): Promise<any> => {
    await connection("ToDoList_Task")
    .insert({
       id: id,
       title: title,
       description: description,
       limit_date: limitDate.split('/').reverse().join("-"),
       user_id: creatorUserId

    })
    .into("ToDoList_Task")
}

export default createTask