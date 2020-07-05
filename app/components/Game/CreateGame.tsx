import React from 'react';
import { Text, View } from "react-native"
import TextInput from './TextInput';
import { Game } from '../../api/openApi';
import { useApi } from '../../api/useApi';

export default ({ gameCreatedHandler }: { gameCreatedHandler: (game: Game) => void }) => {

    const api = useApi();

    const createGame = (name: string) => {
        console.log('we want to create a game with the name', name);
        api.gameControllerCreateGame({ createGame: { name: name } }).then((res) => {
            console.log('game response received', res);
            gameCreatedHandler(res);
        }).catch((err) => { console.log('Error occured' + err); });
    }

    return (
        <View>
            <Text>Let's create a new game.</Text>
            <TextInput defaultText="Enter Game Name" inputHandler={createGame}></TextInput>
        </View>
    );
}