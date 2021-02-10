import * as actionTypes from '../../constants/recipes'

const initialState = {
    recipes: [{
        name: "Chiken Biryani",
        image: 'https://image.freepik.com/free-photo/ramadan-food-vegetarian-kabsa-with-rice-nuts-vegetables_158388-1562.jpg',
        procedure: 'marinate the chicken and fry until brown',
        ingredients: [
            {
                name: 'Chiken',
                quantity: '1',
                unit: 'KG',
            },
            {
                name: 'Rice',
                quantity: '1',
                unit: 'KG',
            },
            {
                name: 'Tomatos',
                quantity: '1',
                unit: 'KG',
            },
            {
                name: 'Onion',
                quantity: '1',
                unit: 'KG',
            }
        ]
    }],
}
const recipes = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_RECIPE:
            const newitem = {
                id: Date.now(),
                value: state.title,
            }
            return {
                ...state,
                recipes: state.recipes.concat(newitem),
            }

        default:
            return state;
    }
}

export default recipes;