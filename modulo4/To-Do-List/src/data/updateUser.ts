import connection from "./connection";

const updateUser = async ( id: string , name: string | null, nickname: string | null, email: string | null): Promise<any> => {
    await connection("ToDoList_Users")
    .update({
        name: name,
        nickname: nickname,
        email: email
    })
    .where("id", id)
}

export default updateUser