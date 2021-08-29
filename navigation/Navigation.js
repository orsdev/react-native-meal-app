import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OverflowMenuProvider } from 'react-navigation-header-buttons';

import Colors from '../constants/Colors';

import CategoriesScreen from '../screens/Categories';
import CategoriesMealScreen from '../screens/CategoriesMeal';
import MealDetailScreen from '../screens/MealDetail';

const Stack = createNativeStackNavigator();

function MealsNavigation() {
   return (
      <NavigationContainer>
         <OverflowMenuProvider>
            <Stack.Navigator
               screenOptions={{
                  headerStyle: {
                     backgroundColor: Colors.primary,
                  },
                  headerTintColor: Colors.text,
                  headerTitleStyle: {
                     fontWeight: 'bold',
                  },
               }}>
               <Stack.Screen
                  name="Categories"
                  component={CategoriesScreen}
               />
               <Stack.Screen
                  name="Meals"
                  component={CategoriesMealScreen}
                  options={{
                     title: 'Meals'
                  }}
               />
               <Stack.Screen name="Details" component={MealDetailScreen} />
            </Stack.Navigator>
         </OverflowMenuProvider>
      </NavigationContainer>
   );
}

export default MealsNavigation;