import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList, ImageBackground } from 'react-native';

const MealItem = ({ item }) => {
   return (
      <View style={styles.container}>
         <TouchableOpacity>
            <View>
               <View style={{ ...styles.row, ...styles.header }}>
                  <ImageBackground source={{ uri: item.imageUrl }} style={styles.bg} >
                     <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                  </ImageBackground>
               </View>
               <View style={{ ...styles.row, ...styles.detail }}>
                  <Text>{item.duration}m</Text>
                  <Text>{item.complexity.toUpperCase()}</Text>
                  <Text>{item.affordability.toUpperCase()}</Text>
               </View>
            </View>
         </TouchableOpacity>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      height: 220,
      width: '100%',
      backgroundColor: '#f5f5f5'
   },
   header: {
      height: '80%',
   },
   detail: {
      height: '20%',
      alignItems: 'center',
      paddingHorizontal: 10,
      justifyContent: 'space-between'
   },
   title: {
      fontSize: 20,
      color: 'white',
      backgroundColor: 'rgba(0,0,0,.5)',
      paddingVertical: 10,
      paddingHorizontal: 5,
      fontWeight: 'bold',
      textAlign: 'center'
   },
   row: {
      flexDirection: 'row'
   },
   bg: {
      width: '100%',
      height: '100%',
      justifyContent: 'flex-end',
      overflow: 'hidden'
   }
})

export default MealItem;