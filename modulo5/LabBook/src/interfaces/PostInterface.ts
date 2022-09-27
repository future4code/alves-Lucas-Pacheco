export interface IPostDB {
    id: string,
    content: string,
    user_id: string,
    
}

export interface IInputPostDTO {
    token: string,
    content: string
}

export interface IPostDTO {
    id: string,
    content: string,
    user_id: string,
    likes: number
}

export interface IDeletePostDTO {
    token: string,
    id: string
}

export interface ILikeDB {
    id: string,
    post_id: string,
    user_id: string
}

export interface ILikeAndDislikePostInputDTO {
    token: string,
    id: string
}