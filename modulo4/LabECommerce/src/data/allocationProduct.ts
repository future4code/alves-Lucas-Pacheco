import connection from "./connection";
import { Register } from "../types/Register";


const allocationProducts = async (userId: string, productId: string, quantity: number):Promise<void> => {

    const id = Date.now() % 10000
    const newId = id.toString()

    const connectionPrice = await connection("labecommerce_products")
    .select("price")
    .where("id", productId)

    const newTotalPrice = connectionPrice.filter((price) => {
        return price.price
    })

    const totalPrice = newTotalPrice.find(element => element.price === element.price)

    const newallocation: Register = {
        id: newId,
        user_id: userId,
        product_id: productId,
        quantity: quantity,
        total_price: quantity * totalPrice.price,
    }

    await connection("labecommerce_purchases")
    .insert(newallocation)
    .into("labecommerce_purchases")
}

export default allocationProducts