import { API, USERS } from '@/infrastructure/Path';
import IClient from '@/infrastructure/provider/IClient';
import { SwrResponse } from '@/interfaces/repository/types';
import IUserRepository from '@/interfaces/repository/user/IUserRepository';
import {
  Data,
  GetUserClassResponse,
  GetUserClassRootParams,
} from './types/getUserClass';

export class UserRepository implements IUserRepository {
  constructor(private readonly _client: IClient) {}

  async fetchAll(): Promise<GetUserClassResponse<Data[]>> {
    const { data } = await this._client.get<GetUserClassResponse<Data[]>>(
      API + USERS,
    );
    return data;
  }

  async fetch(
    rootParams: GetUserClassRootParams,
  ): Promise<GetUserClassResponse<Data>> {
    const { data } = await this._client.get<GetUserClassResponse<Data>>(
      API + `${USERS}/${rootParams.id}`,
    );
    return data;
  }

  fetchSWR(): SwrResponse<'loading', GetUserClassResponse<Data[]> | undefined> {
    const { data, error } = this._client.useSwr<GetUserClassResponse<Data[]>>(
      API + USERS,
    );

    return {
      data: data,
      error,
      isLoading: !error && !data,
    };
  }
}
