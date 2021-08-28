import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const MealDetails = () => {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>Meal Details Screen</Text>
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

export default MealDetails;