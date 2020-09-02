import {DefaultApi, Configuration} from './openApi';
import {Platform} from 'react-native';

export default class ApiFactory {
  private static api: DefaultApi;

  public static getInstance() {
    if (!ApiFactory.api) {
      // the ios and android simulator have different ip adresses
      const platformBasePath = Platform.select({
        ios: () => 'http://localhost:3000',
        android: () => 'http://10.0.2.2:3000',
        default: () => '',
      })();
      ApiFactory.api = new DefaultApi(new Configuration({basePath: platformBasePath}));
    }
    return this.api;
  }
}
