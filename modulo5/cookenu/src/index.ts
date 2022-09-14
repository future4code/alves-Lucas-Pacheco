import app from "./app"
import UserController from "./endpoints/UserController"
import RecipesController from "./endpoints/RecipesController"
import FollowController from "./endpoints/FollowConroller"

const userController = new UserController()
const followController = new FollowController()
const recipesController = new RecipesController()

//POST
app.post("/signup", userController.createUser)
app.post("/login", userController.userLogin)
app.post("/recipes", recipesController.createRecipes)
app.post("/users/follow", followController.createFollow)

//GET
app.get("/profile", userController.userProfile)
app.get("/recipes/:id", recipesController.getRecipesById )
app.get("/user/:id", userController.searchProfile)

//PUT


//DELETE
