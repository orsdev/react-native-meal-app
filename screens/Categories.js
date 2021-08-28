import React from 'react';
import { StyleSheet, FlatList, } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTitle';


const Categories = ({ navigation }) => {

   const renderGridItems = ({ item }) => (
      <CategoryGridTitle navigation={navigation} item={item} />
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
   }
})

export default Categories;