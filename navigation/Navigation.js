import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OverflowMenuProvider } from 'react-navigation-header-buttons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

import CategoriesScreen from '../screens/Categories';
import CategoriesMealScreen from '../screens/CategoriesMeal';
import MealDetailScreen from '../screens/MealDetail';
import FavoriteScreen from '../screens/Favourites';
import FilterScreen from '../screens/Filters';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const StackNavigation = () => (
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
)

function TabNavigation() {
   return (
      <Tab.Navigator
         screenOptions={({ route }) => ({
            tabBarStyle: {
               height: 60
            }
         })}>
         {/* <Tab.Screen
            name="Home"
            component={StackNavigation}
            options={{
               tabBarLabel: 'Home',
               tabBarLabelStyle: {
                  fontSize: 15,
                  color: Colors.secondary
               },
               tabBarIcon: () => (
                  <Ionicons name="home" size={25} color="black" />
               ),
               headerShown: false,
            }} /> */}
         <Tab.Screen
            name="Favorite"
            component={FavoriteScreen} options={{
               tabBarLabel: 'Favorite',
               tabBarLabelStyle: {
                  fontSize: 15,
                  color: Colors.secondary
               },
               tabBarIcon: () => (
                  <Ionicons name="star-outline" size={25} color="black" />
               ),
               headerTitle: 'Your Favorite'
            }} />
      </Tab.Navigator>
   );
}

function DrawerNavigation() {
   return (
      <Drawer.Navigator initialRouteName="Home">
         <Drawer.Screen name="Home" component={StackNavigation} />
         <Drawer.Screen name="My Favorite" component={TabNavigation} />
         <Drawer.Screen name="Filter" component={FilterScreen} />

      </Drawer.Navigator>
   );
}


function MealNavigation() {
   return (
      <NavigationContainer>
         <OverflowMenuProvider>
            <DrawerNavigation />
         </OverflowMenuProvider>
      </NavigationContainer>
   );
}




export default MealNavigation;