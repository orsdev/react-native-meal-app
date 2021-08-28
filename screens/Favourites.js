import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Favourite = () => {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>Favourite Screen</Text>
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

export default Favourite;