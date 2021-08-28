import React from 'react';
import { View, StyleSheet, Text, Button, FlatList } from 'react-native';
import MealItem from '../components/MealItem';

import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoriesMeal = ({ route, navigation }) => {
   const { categoryId } = route.params;
   const findCategoryById = CATEGORIES.find(({ id }) => categoryId === id);
   const displayMeal = MEALS.filter((mls) => mls.categoryIds.indexOf(categoryId) >= 0);

   const renderItems = ({ item }) => {
      return <MealItem item={item} />
   }

   React.useEffect(() => {
      if (findCategoryById) {
         navigation.setOptions({ title: findCategoryById.title });
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
         <FlatList
            data={displayMeal}
            keyExtractor={(item) => item.id}
            renderItem={renderItems}
            style={{
               width: '100%'
            }}
         />
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