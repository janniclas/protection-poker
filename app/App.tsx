import 'react-native-gesture-handler';
import React, {createContext, Dispatch, useReducer} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {HOME, RULES, RootStackParamList, GAME} from './config/Routes';
import Home from './components/Home';
import Rules from './components/Rules';
import Game from './components/Game/Game';
import {reducer, Action, State} from './reducer/Reducer';
import ApiFactory from './api/ApiFactory';

const Stack = createStackNavigator<RootStackParamList>();

const initialState = {gameState: {loading: false}};
export const DispatchContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  ApiFactory.getInstance(dispatch);
  return (
    <SafeAreaProvider>
      <DispatchContext.Provider value={{state, dispatch}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={HOME}>
            <Stack.Screen name={HOME} component={Home} />
            <Stack.Screen name={GAME} component={Game} />
            <Stack.Screen name={RULES} component={Rules} />
          </Stack.Navigator>
        </NavigationContainer>
      </DispatchContext.Provider>
    </SafeAreaProvider>
  );
};
