import React from 'react';
import { View, StyleSheet, ScrollView, Text, Button, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
   Item
} from 'react-navigation-header-buttons';

import CustomHeader from '../components/CustomHeader';
import DefaultText from '../components/DefaultText';
import { toggleFavorite } from '../redux/actions/meals.action';


const ListItem = props => {
   return (
      <View style={styles.listItem}>
         <DefaultText>{props.children}</DefaultText>
      </View>
   );
};


const MealDetails = ({ route, navigation }) => {
   const { mealId } = route.params;
   const availableMeals = useSelector(state => state.meals.meals);
   const favMeals = useSelector(state => state.meals.favoriteMeals);
   const dispatch = useDispatch();

   const findMealById = availableMeals.find(({ id }) => mealId === id);
   const isFav = favMeals.some(({ id }) => mealId === id);


   React.useEffect(() => {

      if (findMealById) {
         navigation.setOptions({
            headerRight: () => (
               <CustomHeader navigation={navigation} >
                  <Item
                     title="Favorite"
                     iconName={isFav ? "star" : "star-outline"}
                     onPress={() => dispatch(toggleFavorite(mealId))} />
               </CustomHeader>
            ),
         });
      }
   }, [findMealById, isFav]);


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
      <ScrollView>
         <Image source={{ uri: findMealById.imageUrl }} style={styles.image} />
         <View style={styles.details}>
            <DefaultText>{findMealById.duration}m</DefaultText>
            <DefaultText>{findMealById.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{findMealById.affordability.toUpperCase()}</DefaultText>
         </View>
         <Text style={styles.title}>Ingredients</Text>
         {findMealById.ingredients.map(ingredient => (
            <ListItem key={ingredient}>{ingredient}</ListItem>
         ))}
         <Text style={styles.title}>Steps</Text>
         {findMealById.steps.map(step => (
            <ListItem key={step}>{step}</ListItem>
         ))}
      </ScrollView>
   )
}

const styles = StyleSheet.create({
   image: {
      width: '100%',
      height: 200
   },
   details: {
      flexDirection: 'row',
      padding: 15,
      justifyContent: 'space-around'
   },
   title: {
      fontSize: 22,
      textAlign: 'center'
   },
   listItem: {
      marginVertical: 10,
      marginHorizontal: 20,
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 10
   }
});

export default MealDetails;