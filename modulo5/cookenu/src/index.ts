import app from "./app"
import UserController from "./endpoints/UserController"
import RecipesController from "./endpoints/RecipesController"
import FollowController from "./endpoints/FollowController"

const userController = new UserController()
const followController = new FollowController()
const recipesController = new RecipesController()

//POST
app.post("/signup", userController.createUser)
app.post("/login", userController.userLogin)
app.post("/recipes", recipesController.createRecipes)
app.post("/user/follow", followController.createFollow)
app.post("/user/unfollow", followController.unFollow)

//GET
app.get("/profile", userController.userProfile)
app.get("/recipes/:id", recipesController.getRecipesById )
app.get("/user/:id", userController.searchProfile)

//PUT


//DELETE
