import PostDataBase from "../dataBase/PostDataBase";
import { InsufficientAuthorization } from "../error/insufficientAuthorization";
import { InvalidCredentiais } from "../error/InvalidCredentiais";
import { InvalidError } from "../error/invalidError";
import { MissingFields } from "../error/MissingFields";
import { IDeletePostDTO, IInputPostDTO, ILikeDB, ILikeAndDislikePostInputDTO } from "../interfaces/PostInterface";
import { Post } from "../Models/Post";
import { USER_ROLES } from "../Models/User";
import Authenticator from "../services/Authenticator";
import GenerateId from "../services/GenerateId";

export default class PostBusiness {
    constructor(
        private postData: PostDataBase,
        private idGenerator: GenerateId,
        private authenticator: Authenticator
    ){}

    public createNewPost = async (post: IInputPostDTO ) => { 
        const token = post.token
        const content = post.content

        if(!token || typeof token !== "string") {
            throw new InvalidError("Seu Token não foi enviado")
        }

        if(!content) {
            throw new MissingFields()
        }

        if(typeof content !== "string") {
            throw new InvalidError("Seu conteúdo não está em string")
        }

        const payload = this.authenticator.verifyToken(token)

        if(!payload) {
            throw new InvalidCredentiais()
        }

        const id = this.idGenerator.createId()

        const newPost = new Post (
            id,
            content,
            payload.id
        )

        await this.postData.createPost(newPost)

        const response = {
            message: "Receita-Criada"
        }

        return response

    }

    public getAllPosts = async (token: string) => {

        if(!token || typeof token !== "string") {
            throw new InvalidError("Token não foi passado de maneira correta, veja se ele está em formato de string")
        }

        const payload = this.authenticator.verifyToken(token)

        if(!payload) {
            throw new InvalidCredentiais()
        }

        const postsDB = await this.postData.getPosts()

        if(!postsDB) {
            throw new InvalidCredentiais()
        }

        const posts = postsDB.map((postDB) => {
            return new Post(
                postDB.id,
                postDB.content,
                postDB.user_id
                
            )
        })

        for (let post of posts) {
            const likes = await this.postData.getLikesPost(post.getId())

            post.setLikes(likes)
        }

        const response = {
            posts
        }

        return response
        
    }

    public deleteUser = async (user: IDeletePostDTO) => {
      const token = user.token
      const id =  user.id


      const postDB = await this.postData.findById(id)

      if(!postDB) {
        throw new InvalidError("Post não encontrado")
      }

      const payload = this.authenticator.verifyToken(token)

      if(!payload) {
        throw new InvalidCredentiais()
      }

      if(payload.role === USER_ROLES.NORMAL) {
        if(payload.id !== postDB.user_id) {
            throw new InsufficientAuthorization()
        }
      }

      await this.postData.deleteUser(id)

     const response = {
        message: "Post deletado com sucesso"
     }

     return response
    }

    public likePost = async (like: ILikeAndDislikePostInputDTO) => {
     const token = like.token
     const id = like.id
     
     if(!token || !id) {
        throw new MissingFields()
     }

     if(typeof token !== "string") {
        throw new InvalidError("Seu Token não está no formato de string")
     }

     if(typeof id !== "string") {
        throw new InvalidError("Seu Id não foi passado em formato de string")
     }

     const payload = this.authenticator.verifyToken(token)

     if(!payload) {
        throw new InvalidCredentiais
     }

     const postDB = await this.postData.findById(id)

     if(!postDB) {
        throw new InvalidError("Post não encontrado")
     }

     const likePost = await this.postData.findlikePost(id, payload.id)

     if(likePost) {
        throw new InvalidError("Este post já foi curtido")
     }

     const idPost = this.idGenerator.createId()

     const newLike: ILikeDB = {
        id: idPost,
        post_id: id,
        user_id: payload.id
     }

     await this.postData.likePost(newLike)

     const response = {
        message: "Post Curtido com sucesso"
     }

     return response
    }

    public dislikePost = async (dislike: ILikeAndDislikePostInputDTO) => {
        const token = dislike.token
        const id = dislike.id


        if(!token || !id) {
            throw new MissingFields()
         }
    
         if(typeof token !== "string") {
            throw new InvalidError("Seu Token não está no formato de string")
         }
    
         if(typeof id !== "string") {
            throw new InvalidError("Seu Id não foi passado em formato de string")
         }
    
         const payload = this.authenticator.verifyToken(token)
    
         if(!payload) {
            throw new InvalidCredentiais
         }
    
         const postDB = await this.postData.findById(id)
    
         if(!postDB) {
            throw new InvalidError("Post não encontrado")
         }


     const likePost = await this.postData.findlikePost(id, payload.id)

     if(!likePost) {
        throw new InvalidError("Este post não foi curtido por você")
     }

     await this.postData.dislikePost(id)

     const response = {
        message: "Post foi descurtido com sucesso"
     }

     return response
    }

}