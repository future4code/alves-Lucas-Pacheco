import connection from "./connection";

const selectProductsUserById = async (userId: string): Promise<any> => {

    const result =  await connection("labecommerce_purchases")
        .where("user_id", userId)
        .join("labecommerce_products", "labecommerce_purchases.product_id", "labecommerce_products.id" )
        .select("labecommerce_products.name", "product_id", "quantity", "total_price")
    

        return result
}


export default selectProductsUserById