import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';

import { CATEGORIES } from '../data/dummy-data';

const CategoriesMeal = ({ route, navigation }) => {
   const { categoryId } = route.params;

   const availableMeals = useSelector(state => state.meals.filteredMeals);

   const findCategoryById = CATEGORIES.find(({ id }) => categoryId === id);
   const displayMeal = availableMeals.filter((mls) => mls.categoryIds.indexOf(categoryId) >= 0);


   if (!findCategoryById) {
      return (
         <View style={styles.container}>
            <Text style={styles.title}> Meal not found</Text>
            <Button
               title="Go to details"
               onPress={() => navigation.navigate('Details')} />
         </View>
      )
   }

   return (
      <View style={styles.container}>
         <MealList
            navigation={navigation}
            data={displayMeal} />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   title: {
      fontSize: 20
   }
})

export default CategoriesMeal;