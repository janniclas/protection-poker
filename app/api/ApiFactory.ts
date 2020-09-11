import {DefaultApi, Configuration} from './openApi';
import {Platform} from 'react-native';
import {Dispatch} from 'react';
import {Action, CreateGameResponseAction} from '../reducer/Reducer';

export default class ApiFactory {
  private static api: ApiWrapper;

  public static getInstance(dispatch?: Dispatch<Action>) {
    if (!ApiFactory.api) {
      if (dispatch) {
        ApiFactory.api = new ApiWrapper(dispatch);
      } else {
        throw new Error('First call to Api Factory has to contain a dispatch object');
      }
    }
    return this.api;
  }
}

export class ApiWrapper {
  private api: DefaultApi;

  constructor(private dispatch: Dispatch<Action>) {
    // the ios and android simulator have different ip adresses
    const platformBasePath = Platform.select({
      ios: () => 'http://localhost:3000',
      android: () => 'http://10.0.2.2:3000',
      default: () => '',
    })();
    this.api = new DefaultApi(new Configuration({basePath: platformBasePath}));
  }

  createGame(name: string) {
    console.log('we want to create a game with the name', name);
    this.api
      .gameControllerCreateGame({createGame: {name: name}})
      .then((res) => {
        console.log('game response received', res);
        this.dispatch(new CreateGameResponseAction(res));
      })
      .catch((err) => {
        console.log('Error occured' + err);
      });
  }
}
