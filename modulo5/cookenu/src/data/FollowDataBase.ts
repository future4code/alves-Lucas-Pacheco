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
}

export default FollowDataBase