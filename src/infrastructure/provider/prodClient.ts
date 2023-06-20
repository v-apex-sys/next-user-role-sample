import { fetcher } from '@/infrastructure/fetcher';
import IClient from '@/infrastructure/provider/IClient';
import axiosBase from '@/infrastructure/provider/axiosBase';
import { AxiosRequestConfig } from 'axios';
import useSWR, { Fetcher, Key, SWRResponse } from 'swr';
import { FullConfiguration } from 'swr/_internal';

export class ProdClient implements IClient {
	defaults = axiosBase.defaults;

  post(url: string, data: any, config?: AxiosRequestConfig): Promise<any> {
    return axiosBase.post(url, data, config);
  }

  put(url: string, data: any, config?: AxiosRequestConfig): Promise<any> {
    return axiosBase.put(url, data, config);
  }

  get(url: string, config?: AxiosRequestConfig): Promise<any> {
    return axiosBase.get(url, config);
  }

  delete(url: string, config?: AxiosRequestConfig): Promise<any> {
    return axiosBase.delete(url, config);
  }

  useSwr = (
    key: Key,
    _fetcher?: Fetcher,
    config?: FullConfiguration,
  ): SWRResponse<any, any> => {
    return useSWR(key, fetcher, { ...config });
  };
}

export const prodClient = new ProdClient();
