import { AxiosDefaults, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Fetcher, Key, SWRResponse } from 'swr';
import { FullConfiguration } from 'swr/_internal';

export default interface IClient {
	defaults: AxiosDefaults;

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<R>;

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<R>;

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R>;

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R>;

  useSwr<T = any>(
    key: Key,
    fetcher?: Fetcher,
    config?: FullConfiguration,
  ): SWRResponse<T, any>;
}
