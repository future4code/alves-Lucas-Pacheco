import { Router } from 'express'
import app from '../app'
import PostBusiness from '../business/PostBusiness'
import PostController from '../controller/PostController'
import PostDataBase from '../dataBase/PostDataBase'
import Authenticator from '../services/Authenticator'
import GenerateId from '../services/GenerateId'


export const postRouter = Router()

const postController = new PostController(
    new PostBusiness(
        new PostDataBase,
        new GenerateId,
        new Authenticator
    )
)
//POST
postRouter.post("/", postController.createRecipes)
postRouter.post("/like/:id", postController.likePost)
postRouter.post("/dislike/:id", postController.dislikePost)

//GET
postRouter.get("/all", postController.getPosts)

// DELETE

postRouter.delete("/:id", postController.deletePost)
