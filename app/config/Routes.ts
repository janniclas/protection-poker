import { GameState } from "../components/Game/Game";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export const HOME = "Home";
export const GAME = "Game";
export const RULES = "Rules";

export type RootStackParamList = {
  Home: undefined;
  Game: { initialState: GameState };
  Rules: undefined;
};

type GameScreenRouteProp = RouteProp<RootStackParamList, "Game">;

type GameScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Game"
>;

export type GameProps = {
  route: GameScreenRouteProp;
  navigation: GameScreenNavigationProp;
};