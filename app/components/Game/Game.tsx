import React, {useState} from 'react';
import AssetView from './Assets/AssetView';
import {Asset} from './Assets/model/Asset';
import {ElementHandler} from './model/RatingElements';
import {Text} from 'react-native';

// 1. step should be to add assets relevant for the application
// adding assets should be possible from all users at the same time
// the asset list should update asynchronously in realtime (use socket connection)
// components: List of assets, text input and add new asset button
// 2. provide button "ready for rating"

const EMPTY_LIST: Asset[] = [];
enum GameState {
  ASSETS,
  FEATURES,
}

export default () => {
  const [listElements, setList] = useState(EMPTY_LIST);
  const [gameState, setGameState] = useState(GameState.ASSETS);

  const assetHandler: ElementHandler<Asset> = {
    addElement: (asset: Asset) => {
      // generate random id for new asset

      // add asset to local data list
      setList([...listElements, asset]);
      // TODO: push new asset to server
    },

    updateElement: (index: number, asset: Asset) => {
      const updatedList = [...listElements];
      updatedList[index] = asset;
      setList(updatedList);
    },

    finish: () => {
      setGameState(GameState.FEATURES);
    },
  };

  switch (gameState) {
    case GameState.ASSETS:
      return <AssetView assetHandler={assetHandler} listElements={listElements} />;
    case GameState.FEATURES:
      return <Text>We need to talk about feature creation now</Text>;
  }
};
