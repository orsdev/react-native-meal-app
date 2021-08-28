import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoriesMeal = ({ route, navigation }) => {
   const { categoryId } = route.params;
   const findCategoryById = CATEGORIES.find(({ id }) => categoryId === id);

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
         <Text style={styles.title}> Categories Meal Screen</Text>
         <Text style={styles.title}>{findCategoryById.title}</Text>
         <Button
            title="Go to details"
            onPress={() => navigation.navigate('Details')} />
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