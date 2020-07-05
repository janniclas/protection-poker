import React, { useState, useEffect } from 'react';
import AssetView from './Assets/AssetView';
import { Asset } from './Assets/model/Asset';
import { ElementHandler } from './model/RatingElements';
import { Text } from 'react-native';
import socketIOClient from "socket.io-client";
import { useApi } from '../../api/useApi';
import { GameProps } from 'app/config/Routes';
import CreateGame from './CreateGame';
import { Game } from 'app/api/openApi';

// 1. step should be to add assets relevant for the application
// adding assets should be possible from all users at the same time
// the asset list should update asynchronously in realtime (use socket connection)
// components: List of assets, text input and add new asset button
// 2. provide button "ready for rating"

const EMPTY_LIST: Asset[] = [];
export enum GameState {
    CREATE,
    ASSETS,
    FEATURES
}


export default ({ route }: GameProps) => {
    const [listElements, setList] = useState(EMPTY_LIST);
    const [gameState, setGameState] = useState(route.params.initialState);
    const api = useApi();
    const [game, setGame] = useState<Game>();
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    // useEffect(() => {
    //   fetch('http://10.0.2.2:3000/games')
    //     .then((response) => {console.log('got response', response); return response.json();})
    //     .then((json) => setData(json.movies))
    //     .catch((error) => console.error(error))
    //     .then(() => setLoading(false));
    // }, []);

    useEffect(() => {

        // const socket = socketIOClient("http://10.0.2.2:3000");

        // socket.on("connection", (data2: any) => {
        //     console.log("got response");
        // });
        // socket.emit('test', "my epic string");
    }, []);



    const assetHandler: ElementHandler<Asset> = {
        addElement: (asset: Asset) => {
            // generate random id for new asset

            // add asset to local data list
            setList([...listElements, asset])
            // TODO: push new asset to server
        },


        updateElement: (index: number, asset: Asset) => {
            const updatedList = [...listElements];
            updatedList[index] = asset;
            setList(updatedList);
        },

        finish: () => {
            setGameState(GameState.FEATURES)
        }
    }

    const gameCreateHandler = (createdGame: Game) => {
        setGameState(GameState.ASSETS);
        setGame(createdGame);
    }

    switch (gameState) {
        case GameState.CREATE:
            return (<CreateGame gameCreatedHandler={gameCreateHandler} />);
        case GameState.ASSETS:
            return (<AssetView assetHandler={assetHandler} listElements={listElements}></AssetView>);
        case GameState.FEATURES:
            return (<Text>We need to talk about feature creation now</Text>);

    }

}
