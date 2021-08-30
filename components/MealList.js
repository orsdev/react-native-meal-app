import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MealItem from './MealItem';


const MealList = ({ data, navigation }) => {
   const renderItems = ({ item }) => {
      return <MealItem item={item} onSelectMeal={() => navigation.navigate('Details', {
         mealId: item.id
      })} />
   }
   return (
      <View style={styles.container}>
         <FlatList
            data={data}
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
   }
})

export default MealList;