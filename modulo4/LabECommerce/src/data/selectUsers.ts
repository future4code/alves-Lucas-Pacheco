
import connection from "./connection";
import getProductsUser from "./selectProductsUserById";

const selectUsers = async () : Promise<any> => {
    const result =  await connection("labecommerce_users")
    .select({
        id: "id",
        name: "name",
        email: "email"
    })

   

    return result
}

export default selectUsers