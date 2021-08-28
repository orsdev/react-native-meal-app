import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Colors from '../constants/Colors';

import CategoriesScreen from '../screens/Categories';
import CategoriesMealScreen from '../screens/CategoriesMeal';
import MealDetailScreen from '../screens/MealDetail';


const Stack = createNativeStackNavigator();

function MealsNavigation() {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen
               name="Categories"
               component={CategoriesScreen}
            />
            <Stack.Screen
               name="Meals"
               component={CategoriesMealScreen}
               options={{
                  title: 'Meal Categories',
                  headerStyle: {
                     backgroundColor: Colors.primary,
                  },
                  headerTintColor: Colors.text,
               }} />
            <Stack.Screen name="Details" component={MealDetailScreen} />
         </Stack.Navigator>
      </NavigationContainer>
   );
}

export default MealsNavigation;