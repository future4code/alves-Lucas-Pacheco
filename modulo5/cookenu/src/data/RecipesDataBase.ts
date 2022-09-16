import { format } from "path";
import Recipes, { RecipesDB } from "../models/Recipes";
import BaseDataBase from "./BaseDataBase";


export const recipesTable: string =  "Cookenu_Receitas"

class RecipesDataBase extends BaseDataBase {

    public createRecipes = async (recipes: Recipes): Promise<void> => {

        const recipesDB: RecipesDB = {
            id: recipes.getId(),
            title: recipes.getTitle(),
            description: recipes.getDescription(),
            create_Date: recipes.getcreateDate(),
            user_id: recipes.getuserId()
        }

        await this.getConnetion()
        .insert(recipesDB)
        .into(recipesTable)
        
    }

    public getRecipesById = async (id: string): Promise<RecipesDB | undefined> => {
        const result: RecipesDB[] = await this.getConnetion()
        .select("*")
        .where({id})
        .from(recipesTable)

        return result[0]
    }

    public selectFollowRecipes = async (followId: string) => {

        const result = await this.getConnetion()
        .select("Cookenu_Receitas.id", "title", "description", "create_Date", "user_id", "Cookenu_User.name")
        .from(recipesTable)
        .where({user_id: followId})
        .join("Cookenu_User", "Cookenu_Receitas.user_id", "Cookenu_User.id")

        return result
        
    }

    public editRecipe = async (id: string, title: string, description: string) => {
        await this.getConnetion()
        .from(recipesTable)
        .update({
            title: title,
            description: description
        })
        .where({id: id})
        
    }

    public deleteRecipe = async (id: string) => {
        await this.getConnetion()
        .from(recipesTable)
        .delete()
        .where({id: id})
    }
} 


export default RecipesDataBase