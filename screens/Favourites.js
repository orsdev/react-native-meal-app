import React from 'react';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import { Text, View } from 'react-native';

const Favourite = ({ navigation }) => {
   const favMeals = useSelector(state => state.meals.favoriteMeals);

   if (favMeals.length === 0 || !favMeals) {
      return (
         <View style={{
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
         }}>
            <Text style={{
               fontSize: 20
            }}>No Favorite meal!</Text>
         </View>
      )
   }

   return <MealList data={favMeals} navigation={navigation} />
}

export default Favourite;