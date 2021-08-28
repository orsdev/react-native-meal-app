import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Filters = () => {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>Filters Screen</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      paddingHorizontal: 10,
      paddingVertical: 30,
      backgroundColor: 'black',
      borderColor: 'black',
      borderWidth: 2,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   title: {
      color: 'white',
      fontSize: 20
   }
})

export default Filters;