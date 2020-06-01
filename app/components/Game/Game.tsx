import React from 'react';
import { View } from 'react-native';
import AssetList from './AssetList';
import AddAsset from './AddAsset';

// 1. step should be to add assets relevant for the application
    // adding assets should be possible from all users at the same time
    // the asset list should update asynchronously in realtime (use socket connection)
        // components: List of assets, text input and add new asset button
// 2. provide button "ready for rating"
export default () => {

    return (
        <View>
         <AssetList elements={DATA}/>
         <AddAsset/>
        </View>
    )
}


const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Second Item2',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Third Item',
    },
  ];