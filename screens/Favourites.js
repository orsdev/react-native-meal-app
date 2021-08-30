import React from 'react';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';

const Favourite = ({ navigation }) => {
   const favMeals = useSelector(state => state.meals.favoriteMeals);
   return <MealList data={favMeals} navigation={navigation} />
}

export default Favourite;