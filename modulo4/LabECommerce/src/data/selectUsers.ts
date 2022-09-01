
import connection from "./connection";
import getProductsUser from "./getProductsUser";

const selectUsers = async () : Promise<any> => {
    const result =  await connection("labecommerce_users")
    .select({
        id: "id",
        name: "name",
        email: "email"
    })

    // for(const user of result){
    //     try {
            
            // const purchases = await connection("labecommerce_products")
            // .join("labecommerce_purchases", "labecommerce_products.id", "labecommerce_purchases.product_id")

            // .join("labecommerce_purchases","labecommerce_users.id", "labecommerce_purchases.user_id")

            // .select("labecommerce_products.id", "labecommerce_products.name", "labecommerce_products.price", "image_url", "labecommerce_purchases.quantity", "labecommerce_purchases.total_price")

        //     const purchases = getProductsUser(user.id)
            
        //    user.purchases = purchases

        //    if(purchases.length === 0) {
        //     user.purchases = []
        // }
        // } catch(error: any) {
        //   user.purchases = []
        // }
    // }

    return result
}

export default selectUsers