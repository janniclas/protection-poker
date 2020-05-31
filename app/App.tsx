import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {HOME, RULES, RootStackParamList} from './config/Routes';
import Home from './components/Home';
import Rules from './components/Rules';

const Stack = createStackNavigator<RootStackParamList>();


const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={HOME}>

          <Stack.Screen name={HOME} component={Home} />
          <Stack.Screen name={RULES}  component={Rules} />

        </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
  );
};


export default App;
