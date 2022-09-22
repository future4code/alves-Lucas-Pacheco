

export class Post {
    constructor (
     private id: string,
     private content: string,
     private user_id: string,
     private likes: number | string = 0
    ) {}

    public getId() {
        return this.id
    }

    public getContent() {
        return this.content
    }
    
    public getUserId() {
      return this.user_id
    }

    public getLikes(){
     return this.likes
    } 

    public setContent = (newContent: string) => {
        this.content = newContent
    }
    public setLikes = (newLikes: number) => {
        this.likes = newLikes
    }

}