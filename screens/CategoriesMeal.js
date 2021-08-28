import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const CategoriesMeal = ({ route, navigation }) => {
   return (
      <View style={styles.container}>
         <Text style={styles.title}> Categories Meal Screen</Text>
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