import React from 'react';
import {  StackNavigationProp } from '@react-navigation/stack';
import {
  StyleSheet,
  View,
  Button,
  Alert,

} from 'react-native';

import { RULES, RootStackParamList, GAME} from './../config/Routes';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

  
  const continueGame = () => {
    Alert.alert("This feature will be implemented at a later point in time. \n Check github.com/janniclas/protection-poker for updates.")
  }
  
  
  const styles = StyleSheet.create({
  
    body: {
      backgroundColor: Colors.white,
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
  });

export default (prop: Props) => {

  return (
    <View style={styles.body}>
      <Button onPress={ () => {
          prop.navigation.navigate(GAME);
      }
      }
      title="New Game"
      />
      <Button onPress={continueGame}
      title="Continue Game"
      />
      <Button onPress={() => {
          prop.navigation.navigate(RULES);
      }}
      title="Rules"
      />
    </View>
  )
}