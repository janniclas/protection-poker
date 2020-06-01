import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


  
  function Item( {title}: {title: string} ) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }

export default ({elements}: {elements: { id: string; name: string; }[]}) => {

    return (
        <FlatList
        data={elements}
        renderItem={({ item }) => <Item title={item.name} />}
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