import { combineReducers } from 'redux';
import mealReducer from './reducers/meals.reducer';

export const rootReducer = combineReducers({
  meals: mealReducer
});

