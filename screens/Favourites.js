import React from 'react';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const Favourite = ({ navigation }) => {
   const favMeals = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2')
   return <MealList data={favMeals} navigation={navigation} />
}

export default Favourite;