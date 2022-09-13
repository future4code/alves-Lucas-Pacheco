import connection from "./connection";

const getProductsUser = async (userId: string): Promise<any> => {

    const result =  await connection("labecommerce_purchases")
        .select("*")
        .where("user_id", userId)
    

        return result
}


export default getProductsUser