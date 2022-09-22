import { ILikeDB, IPostDB } from "../interfaces/PostInterface"


import { Post } from "../Models/Post"
import BaseDataBase from "./BaseDataBase"


export default class PostDataBase extends BaseDataBase {
    private static POST_TABLE = "Labook_Posts"
    private static LIKES_TABLE = "Labook_Likes"

    public PostDBModel = (post: Post) => {
        const postDB: IPostDB = {
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUserId(),
            
        }

        return postDB
    }

    public createPost = async (post: Post): Promise<void> => {
        const postDB = this.PostDBModel(post)
        
         await this.getConnetion()
        .insert(postDB)
        .into(PostDataBase.POST_TABLE)
    }

    public getPosts = async (): Promise<IPostDB[] | undefined> => {
        const result: IPostDB[] = await this.getConnetion()
        .select("*")
        .into(PostDataBase.POST_TABLE)

        return result
    }

    public getLikesPost = async (id: string) => {
        const result = await this.getConnetion()
        .select()
        .count("id")
        .from(PostDataBase.LIKES_TABLE)
        .where({post_id: id})
        
        return result[0]["count(`id`)"] as number
    }

    public findById = async (id: string): Promise<IPostDB | undefined> => {
        const postDB: IPostDB[] = await this.getConnetion()
        .from(PostDataBase.POST_TABLE)
        .select("*")
        .where({ id })

        return postDB[0]
        
    }

    public deleteUser = async (id: string) => {
      await this.getConnetion()
      .from(PostDataBase.POST_TABLE)
      .delete()
      .where({ id })    

      await this.getConnetion()
      .delete()
      .from(PostDataBase.LIKES_TABLE)
      .where({
        post_id: id
      })
    }

    public findlikePost = async (id: string, userId: string) => {
        const postLikeDB : ILikeDB[] = await this.getConnetion()
        .into(PostDataBase.LIKES_TABLE)
        .select()
        .where({user_id: userId})
        .andWhere({post_id: id})

        return postLikeDB[0]
    }

    public likePost = async (newLike: ILikeDB): Promise<void> => {
        const newLikeDB: ILikeDB = {
            id: newLike.id,
            post_id: newLike.post_id,
            user_id: newLike.user_id
        }

        await this.getConnetion()
        .into(PostDataBase.LIKES_TABLE)
        .insert(newLikeDB)
        
    }

    public dislikePost =async (id: string) => {
        await this.getConnetion()
        .from(PostDataBase.LIKES_TABLE)
        .delete()
        .where({post_id: id})
    }
}