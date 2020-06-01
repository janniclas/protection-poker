import React, { useState } from 'react';
import { View, Button } from 'react-native';
import AssetList from './AssetList';
import AddAsset from './AddAsset';

// 1. step should be to add assets relevant for the application
    // adding assets should be possible from all users at the same time
    // the asset list should update asynchronously in realtime (use socket connection)
        // components: List of assets, text input and add new asset button
// 2. provide button "ready for rating"

const EMPTY_LIST: {id: string, name: string}[] = [

];

export default () => {
    const [listElements, setList] = useState(EMPTY_LIST);


    const handleAddAsset = (name: string) => {
        // generate random id for new asset
        const newElement = {id: '' + Math.random(), name: name};
        // add asset to local data list
        setList([...listElements, newElement])
        // TODO: push new asset to server
    }

    return (
        <View>
         <AssetList elements={listElements}/>
         <AddAsset addAssetHandler={handleAddAsset}/>
         <Button title={"Start Rating"} onPress={()=> {
             // TODO: navigate to rating 
         }}/>
        </View>
    )


}
