import ApiFactory from '../api/ApiFactory';
import {Game} from '../api/openApi';

export enum ActionTypes {
  CREATE_GAME,
  CREATE_GAME_RESPONSE,
  GET_GAME_LIST,
}

export interface Action {
  readonly type: ActionTypes;
  readonly payload?: any;
}

export class CreateGameAction implements Action {
  readonly type = ActionTypes.CREATE_GAME;
  constructor(readonly payload: string) {
    this.payload = payload;
  }
}

export class CreateGameResponseAction implements Action {
  readonly type = ActionTypes.CREATE_GAME_RESPONSE;
  constructor(readonly payload: Game) {
    this.payload = payload;
  }
}

interface GameState {
  game?: Game;
  loading: boolean;
}

export interface State {
  gameState: GameState;
}

export const reducer = (state: State, action: Action): State => ({
  gameState: gameReducer(state.gameState, action),
});

export const gameReducer = (state: GameState, action: Action): GameState => {
  switch (action.type) {
    case ActionTypes.CREATE_GAME:
      ApiFactory.getInstance().createGame(action.payload);
      return {...state, loading: true};
    case ActionTypes.CREATE_GAME_RESPONSE:
      return {...state, game: action.payload, loading: false};
    default:
      throw new Error();
  }
};

//const gameReducer = (state: GameState, action: GameAction): GameState => {};
