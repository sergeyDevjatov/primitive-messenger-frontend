import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';


export default class Api {
  protected _axios: AxiosInstance;

  constructor() {
    this._axios = axios.create({
      baseURL: process.env.BASE_URL ?? '/',
    });
  }

  public async post<R>(path: string, requestData: any, options: AxiosRequestConfig = {}) {
    return this._axios.post<R>(path, { ...requestData, ...options });
  }

  public async get<R>(path: string, requestData: any, options: AxiosRequestConfig = {}) {
    return this._axios.get<R>(path, {
      params: requestData,
      ...options,
    });
  }

  public static __instance: Api | null = null;

  public static get instance(): Api {
    return this.__instance ?? (this.__instance = new Api());
  }
}
