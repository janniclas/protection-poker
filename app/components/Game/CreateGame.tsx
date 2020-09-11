import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import TextInput from './TextInput';
import {Game} from '../../api/openApi';
import {DispatchContext} from '../../App';
import {CreateGameAction} from '../../reducer/Reducer';

export default ({gameCreatedHandler}: {gameCreatedHandler: (game: Game) => void}) => {
  const {state, dispatch} = useContext(DispatchContext);

  const createGame = (name: string) => {
    dispatch(new CreateGameAction(name));
  };

  if (state.gameState.loading) {
    return (
      <View>
        <Text>Loading....</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Let's create a new game.</Text>
        <TextInput defaultText="Enter Game Name" inputHandler={createGame} />
      </View>
    );
  }
};
