import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import MealList from '../components/MealList';

import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoriesMeal = ({ route, navigation }) => {
   const { categoryId } = route.params;
   const findCategoryById = CATEGORIES.find(({ id }) => categoryId === id);
   const displayMeal = MEALS.filter((mls) => mls.categoryIds.indexOf(categoryId) >= 0);

   React.useLayoutEffect(() => {
      if (findCategoryById) {
         navigation.setOptions({
            title: findCategoryById.title,
            headerRight: CustomHeader
         });
      }
   }, [findCategoryById]);


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