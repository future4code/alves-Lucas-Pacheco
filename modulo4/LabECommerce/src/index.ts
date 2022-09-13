import app from "./app";
import getAllProducts from "./endpoint/getAllProducts";
import getUsersPurchases from "./endpoint/getAllProductsForUser";
import getAllUsers from "./endpoint/getAllUsers";
import PostAttribution from "./endpoint/PostAllocationProducts";
import PostCreateProducts from "./endpoint/PostCreateProducts";
import PostCreateUser from "./endpoint/PostCreateUser";

// POST
// Endpoint que cria um usuário
app.post("/User", PostCreateUser)

//Endpoint que cria um produto
app.post("/products", PostCreateProducts)

//Endpoint que atribue a um usuário uma venda finalizada.
app.post("/purchases", PostAttribution)


// GET
//Endpoint que pega todos os usuários
app.get("/User", getAllUsers)

//Endpoint que retorna todos os produtos
app.get("/products", getAllProducts)

//Endpoint que retorna todos os produtos de um usuário em questão
app.get("/users/:user_id/purchases", getUsersPurchases)