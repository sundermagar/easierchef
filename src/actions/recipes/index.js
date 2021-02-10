import * as actionTypes from '../../constants/recipes'

export const addRecipe = (recipe) => {
    return{ 
        type: actionTypes.ADD_RECIPE, 
        recipe
    }
}