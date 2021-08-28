import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const CategoryGridTitle = ({ navigation, item }) => {
   return (
      (
         <TouchableOpacity
            onPress={() => navigation.navigate('Meals', {
               categoryId: item.id
            })}
            style={styles.grid}>
            <View style={{
               backgroundColor: item.color,
               flex: 1,
               justifyContent: 'center',
               alignItems: 'center'
            }}>
               <Text style={styles.title}>{item.title}</Text>
            </View>
         </TouchableOpacity>
      )

   )
}

const styles = StyleSheet.create({
   grid: {
      flex: 1,
      margin: 10,
      height: 150
   },
   title: {
      fontSize: 20,
      color: 'black',
      fontFamily: 'OpenSansBold'
   },
});

export default CategoryGridTitle;
