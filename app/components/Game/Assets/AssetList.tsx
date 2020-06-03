import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Asset } from './model/Asset';



function AssetItem({ name, rating }: { name: string, rating?: number }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{name} {rating ? " - Value: " + rating : ""}</Text>
    </View>
  );
}

export const AssetList = ({elements}: {elements: Asset[]}) => {
  return (
    <FlatList
    data={elements}
    renderItem={({ item }) => AssetItem(item)}
    keyExtractor={item => item.id}
  />
  );
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