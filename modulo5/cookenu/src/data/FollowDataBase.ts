import BaseDataBase from "./BaseDataBase";
import { Follow, FollowDB } from "../models/follow";

const FollowTable = "Cookenu_follow"

class FollowDataBase extends BaseDataBase {

    public insertFollow = async (follow: Follow): Promise<void> => {
        
        const newFollow: FollowDB = {
            id: follow.getId(),
            profile: follow.getProfile(),
            follow: follow.getFollow(),
         }

         await this.getConnetion()
         .insert(newFollow)
         .into(FollowTable)
        
    }

    public deleteFollow = async (id: string): Promise<void> => {
        await this.getConnetion()
        .delete()
        .where({id})
        .from(FollowTable)
    }

    public getFollowByProfile = async (profile: string): Promise< FollowDB | undefined> => {
        const result: FollowDB[] = await this.getConnetion()
        .select("*")
        .where({profile})
        .from(FollowTable)

        return result[0]
        
    }
}

export default FollowDataBase