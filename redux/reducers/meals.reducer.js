import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../types";

const initialState = {
   meals: MEALS,
   filteredMeals: MEALS,
   favoriteMeals: []
}

const mealReducer = (state = initialState, action) => {
   switch (action.type) {
      case TOGGLE_FAVORITE:
         const existingIndex = state.favoriteMeals.findIndex((mls) => mls.id === action.mealId);

         if (existingIndex >= 0) {
            const updatedMeals = [...state.favoriteMeals];
            updatedMeals.splice(existingIndex, 1);
            return {
               ...state,
               favoriteMeals: updatedMeals
            }
         } else {
            const meal = state.meals.find((mls) => mls.id === action.mealId);
            return {
               ...state,
               favoriteMeals: state.favoriteMeals.concat(meal)
            }
         }
      default:
         return state;
   }
}

export default mealReducer;