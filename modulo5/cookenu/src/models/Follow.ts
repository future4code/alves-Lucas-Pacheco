export interface FollowDB {
    id: string,
    profile: string
    follow: string
}


export class Follow {
    private id: string
    private profile: string
    private follow: string

    constructor(
        id: string,
        profile: string,
        follow: string
    ){
        this.id = id,
        this.profile = profile
        this.follow = follow
    }
    
    public getId(){
        return this.id
    }

    public getProfile(){
        return this.profile
    }

    public getFollow(){
        return this.follow
    }
    
}