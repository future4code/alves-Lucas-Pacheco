import connection from "./connection"


const CreateUser = async (id: string, name: string, nickname: string, email: string): Promise<void> => {
    await connection("ToDoList_Users")
    .insert({
        id: id,
        name: name, 
        nickname: nickname,
        email: email
    })
    .into("ToDoList_Users")
}

export default CreateUser