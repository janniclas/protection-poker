import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Asset } from './model/Asset';


  
  function Item( {title, rating}: {title: string, rating?: number} ) {
    console.log("item to display", title, rating);
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title} {rating ? " - Value: " + rating : ""}</Text>
      </View>
    );
  }

export default ({elements}: {elements: Asset[]}) => {
    
    return (
        <FlatList
        data={elements}
        renderItem={({ item }) => <Item title={item.name} rating={item.rating} />}
        keyExtractor={item => item.id}
      />
    )
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });