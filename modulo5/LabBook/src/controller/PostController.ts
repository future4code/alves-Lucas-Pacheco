import { Request, Response } from "express";
import PostBusiness from "../business/PostBusiness";
import { IDeletePostDTO, IInputPostDTO, ILikeAndDislikePostInputDTO } from "../interfaces/PostInterface";

export default class PostController {
    constructor(
        private postBusiness: PostBusiness
    ){}

    public createRecipes = async (req: Request, res: Response): Promise<void> => {
        try {
            const token = req.headers.authorization as string
            const content = req.body.content

            const newPost: IInputPostDTO  = {
                token: token,
                content: content
            }

            const response = await this.postBusiness.createNewPost(newPost)

            res.status(201).send(response)
        } catch (error) {
            if(error instanceof Error) {
                res.status(res.statusCode).send({message: error.message})
                return
            }

            res.status(500).send("Erro inesperado")
        }
        
    }

    public getPosts = async (req: Request, res: Response) => {
        try {
        const token = req.headers.authorization as string 
             
        const response = await this.postBusiness.getAllPosts(token)

        res.status(200).send(response)
        } catch (error) {
            if(error instanceof Error) {
                return res.status(res.statusCode).send({message: error.message})
                
            }

            res.status(500).send("Erro inesperado")
        }
    }

    public deletePost = async (req: Request, res: Response): Promise<void> => {
       try {
        const token = req.headers.authorization as string
        const id = req.params.id 

        const DeletePost: IDeletePostDTO = {
            token: token,
            id: id
        }


        const response = await this.postBusiness.deleteUser(DeletePost)

        res.status(200).send(response)
       } catch (error) {
        if(error instanceof Error) {
            res.status(res.statusCode).send({message: error.message})
            return
        }

        res.status(500).send("Erro inesperado")
       }

    }

    public likePost = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const id = req.params.id 

            const like: ILikeAndDislikePostInputDTO = {
              token: token,
              id: id
            }

            const response = await this.postBusiness.likePost(like)

            res.status(201).send(response)
        } catch (error) {
            if(error instanceof Error) {
                return res.status(res.statusCode).send({message: error.message})
                
            }
    
            res.status(500).send("Erro inesperado")
           }
    }

    public dislikePost = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const id = req.params.id 

            

            const dislike: ILikeAndDislikePostInputDTO = {
                token: token,
                id: id
            }

            

            const response = await this.postBusiness.dislikePost(dislike)

            res.status(200).send(response)
        } catch (error) {
            if(error instanceof Error) {
                return res.status(res.statusCode).send({message: error.message})
                
            }
    
            res.status(500).send("Erro inesperado")
        }
    }
        
}
 