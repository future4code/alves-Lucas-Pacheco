import { Product } from "../types/Products";
import connection from "./connection";


const RegisterProduct = async (name: string, price: number, imageUrl: string): Promise<void> => {

    const id = Date.now() % 10000
    const newId = id.toString()

    const newProduct: Product = {
      id: newId,
      name: name,
      price: price,
      image_url: imageUrl
    }
    
    await connection("labecommerce_products")
    .insert(newProduct)
    .into("labecommerce_products")


}

export default RegisterProduct