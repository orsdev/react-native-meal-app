import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

const MealList = ({ displayMeal, renderItems }) => {
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
   }
})

export default MealList;