import { DefaultApi, Configuration } from "./openApi";

export default class ApiFactory {

    private static api: DefaultApi;

    public static getInstance() {
        if (!ApiFactory.api) {
            ApiFactory.api = new DefaultApi(new Configuration({basePath: "http://10.0.2.2:3000"}));
        }
        return this.api;
    }
}