import { BOOKS, USERS } from '@/infrastructure/Path';
import IClient from '@/infrastructure/provider/IClient';
import axiosBase from '@/infrastructure/provider/axiosBase';
import { objectKeysToCamel } from '@/utils/changeCase';
import { AxiosRequestConfig } from 'axios';
import { Fetcher, Key } from 'swr';
import { FullConfiguration } from 'swr/_internal';

const result = (data: any) => ({ data });

const wrapPromise = (item: any) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(result(objectKeysToCamel(item)));
    }, 500),
  );

const mockPaths = [
  {
    path: 'roles',
    value: require('@/infrastructure/mock/data/role/index.ts').default,
  },
  {
    path: 'accounts',
    value: require('@/infrastructure/mock/data/account/index.ts').default,
  },
  {
    path: USERS,
    value: require('@/infrastructure/mock/data/users/index.ts').default,
  },
  {
    path: BOOKS,
    value: require('@/infrastructure/mock/data/books/index.ts').default,
  },
];

const getTarget = (path?: string) => {
  return mockPaths.filter((item) => item.path === path);
};

class MockClient implements IClient {
  defaults = axiosBase.defaults;

  /**
   * post
   */
  post(path: string, data?: any, config?: AxiosRequestConfig): Promise<any> {
    const lastPath = path.split('/').pop();

    const target = getTarget(lastPath);

    if (target.length !== 0) {
      return wrapPromise(target[0].value);
    }

    return axiosBase.post(path, data, config);
  }

  // TODO: 整備
  put(path: string, data: any, config?: AxiosRequestConfig): Promise<any> {
    const lastPath = path.split('/').pop();
    const target = getTarget(lastPath);

    if (target.length !== 0) {
      return wrapPromise(target[0].value);
    }

    return axiosBase.put(path, data, config);
  }

  // TODO: 整備
  get(path: string, config?: AxiosRequestConfig): Promise<any> {
    // FIXME:
    const splitPath = path.split('/');
    const existRootParams = splitPath.length > 3;
    const rootParams = existRootParams ? splitPath.slice(-1)[0] : '';

    const lastPath = existRootParams
      ? splitPath.splice(2, 1)[0]
      : splitPath.pop();
    const target = getTarget(lastPath);

    if (target.length === 0) {
      return axiosBase.get(path, config);
    }

    if (rootParams) {
      const id = rootParams ? Number(rootParams) : 0;
      const obj = target[0].value.data.find((item: any) => item.id === id);
      return wrapPromise({ data: obj });
    }
    return wrapPromise(target[0].value);
  }

  // TODO: 整備
  delete(path: string, config?: AxiosRequestConfig): Promise<any> {
    const lastPath = path.split('/').pop();
    const target = getTarget(lastPath);

    if (target.length !== 0) {
      return wrapPromise(target[0].value);
    }

    return axiosBase.delete(path, config);
  }

  // TODO: 整備
  useSwr = (key: Key, _fetcher?: Fetcher, _config?: FullConfiguration): any => {
    const lastPath = typeof key === 'string' ? key.split('/').pop() : '';
    const target = getTarget(lastPath);

    // MEMO: SWRではないけど仕方なし、挙動が実際とは違うので注意
    if (target.length !== 0) {
      return { data: target[0].value, error: undefined };
    }
  };
}

export const mockClient = new MockClient();
