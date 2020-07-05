import ApiFactory from './ApiFactory';

export function useApi() {
  const api = ApiFactory.getInstance();
  return api;
}
