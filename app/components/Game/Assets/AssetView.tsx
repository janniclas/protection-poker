import React, { useState } from 'react';
import { Asset } from './model/Asset';
import { View, Button, Alert } from 'react-native';
import AssetList from './AssetList';
import AddAsset from './AddAsset';
import Rating from './Rating';

enum GameState {
    ADD_ASSETS,
    RATE_ASSETS
}
export default ({ addAssetHandler, listElements }: { addAssetHandler: (asset: Asset) => void, listElements: Asset[] }) => {
    const [gameState, setGameState] = useState(GameState.ADD_ASSETS);

    const createAsset = (name: string) => {
        const newElement = { id: '' + Math.random(), name: name };
        addAssetHandler(newElement);
    }

    const applyRating = (element: Asset) => {

    }

    const finishRating = () => { }

    switch (gameState) {
        case GameState.ADD_ASSETS:
            return (
                <View>
                    <AssetList elements={listElements} />
                    <AddAsset addAssetHandler={createAsset} />
                    <Button title={"Start Rating"} onPress={() => {
                        if (listElements.length > 0) {
                            setGameState(GameState.RATE_ASSETS)
                        } else {
                            Alert.alert("You have to add an asset before you can start the rating.");
                        }
                    }} />
                </View>
            );
        case GameState.RATE_ASSETS:
            return (
                <Rating elementsToRate={listElements} applyRating={applyRating} ratingFinished={finishRating}></Rating>
            );
    }
}