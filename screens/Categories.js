import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';


const Categories = ({ navigation }) => {

   const renderGridItems = ({ item }) => (
      <TouchableOpacity
         onPress={() => navigation.navigate('Meals', {
            categoryId: item.id
         })}
         style={styles.grid}>
         <View >
            <Text style={styles.title}>{item.title}</Text>
         </View>
      </TouchableOpacity>
   )


   return (
      <FlatList
         numColumns={2}
         data={CATEGORIES}
         keyExtractor={item => item.id}
         renderItem={renderGridItems}
      />
   )
}

const styles = StyleSheet.create({
   title: {
      fontSize: 20,
      color: 'black',
      fontFamily: 'OpenSansBold'
   },
   grid: {
      flex: 1,
      margin: 10,
      height: 150
   }
})

export default Categories;