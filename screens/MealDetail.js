import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import { MEALS } from '../data/dummy-data';

const MealDetails = ({ route, navigation }) => {
   const { mealId } = route.params;
   const findMealById = MEALS.find(({ id }) => mealId === id);


   React.useEffect(() => {
      if (findMealById) {
         navigation.setOptions({ title: findMealById.title });
      }
   }, [findMealById])


   if (!findMealById) {
      return (
         <View style={styles.container}>
            <Text style={styles.title}> Meal not found</Text>
            <Button
               title="Go back home"
               onPress={() => navigation.popToTop()} />
         </View>
      )
   }

   return (
      <View style={styles.container}>
         <Text style={styles.title}>{findMealById.title}</Text>
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

export default MealDetails;