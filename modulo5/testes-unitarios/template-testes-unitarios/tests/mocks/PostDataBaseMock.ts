import { BaseDatabase } from "../../src/database/BaseDatabase"
import { PostDatabase } from "../../src/database/PostDatabase"
import { ILikeDB, IPostDB, Post } from "../../src/models/Post"

export class PostDatabaseMock extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    
    public toPostDBModel = (post: Post): IPostDB => {
        const postDB: IPostDB = {
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUserId()
        }

        return postDB
    }

    public createPost = async (post: Post): Promise<void> => {}

    public getPosts = async (): Promise<IPostDB[]> => {
      const postsDB: IPostDB[] = [
        {
            id: "205",
            content: "Olá, foi um ótimo dia aqui!",
            user_id: "101"
        },
        {
            id: "206",
            content: "Bom dia, família",
            user_id: "102"
        },
        {
            id: "207",
            content: "recebendo",
            user_id: "id-mock"
        }
      ]

      return postsDB
    }

    public getLikes = async (postId: string): Promise<number> => {
       if(postId == "205") {
        return 1
       }
       if(postId == "206") {
        return 2
       }
       if(postId == "207") {
        return 7
       }

       return 0
    }

    public findPostById = async (postId: string): Promise<IPostDB | undefined> => {
        switch(postId) {
            case "205":
                return {
                    id: "205",
                    content: "Olá, foi um ótimo dia aqui!",
                    user_id: "101"
                }
            case "206":
                return  {
                    id: "206",
                    content: "Bom dia, família",
                    user_id: "102"
                }
            case "207":
                return  {
                    id: "207",
                    content: "recebendo",
                    user_id: "id-mock"
                }
            default:
                return undefined
        }
    }

    public deletePost = async (postId: string): Promise<void> => {}

    public findLike = async (postId: string, userId: string): Promise<ILikeDB | undefined> => {
        if(postId == "205" && userId == "id-mock") {
          return {
            id: "301",
            post_id: "205",
            user_id: "id-mock"
          }
        } else if (postId == "207" && userId == "id-mock") {
            return {
                id: "303",
                post_id: "207",
                user_id: "id-mock"
            }
        } else {
            return undefined
        }
    }

    public addLike = async (likeDB: ILikeDB): Promise<void> => {}

    public removeLike = async (postId: string, userId: string): Promise<void> => {}
}