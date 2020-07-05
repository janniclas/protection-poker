import React, {useState} from 'react';
import AssetView from './Assets/AssetView';
import {Asset} from './Assets/model/Asset';
import {ElementHandler} from './model/RatingElements';
import {Text} from 'react-native';
import {GameProps} from 'app/config/Routes';
import CreateGame from './CreateGame';
import {Game} from 'app/api/openApi';

// 1. step should be to add assets relevant for the application
// adding assets should be possible from all users at the same time
// the asset list should update asynchronously in realtime (use socket connection)
// components: List of assets, text input and add new asset button
// 2. provide button "ready for rating"

const EMPTY_LIST: Asset[] = [];
export enum GameState {
  CREATE,
  ASSETS,
  FEATURES,
}

export default ({route}: GameProps) => {
  const [listElements, setList] = useState(EMPTY_LIST);
  const [gameState, setGameState] = useState(route.params.initialState);
  const [game, setGame] = useState<Game>();

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

  const gameCreateHandler = (createdGame: Game) => {
    setGameState(GameState.ASSETS);
    setGame(createdGame);
    console.log('game was set' + game);
  };

  switch (gameState) {
    case GameState.CREATE:
      return <CreateGame gameCreatedHandler={gameCreateHandler} />;
    case GameState.ASSETS:
      return <AssetView assetHandler={assetHandler} listElements={listElements} />;
    case GameState.FEATURES:
      return <Text>We need to talk about feature creation now</Text>;
  }
};
