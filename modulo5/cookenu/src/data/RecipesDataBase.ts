import Recipes, { RecipesDB } from "../models/Recipes";
import BaseDataBase from "./BaseDataBase";


const recipesTable: string =  "Cookenu_Receitas"

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
}


export default RecipesDataBase