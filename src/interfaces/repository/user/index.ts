import { SwrResponse } from '@/application/types';
import { API, USERS } from '@/infrastructure/Path';
import IClient from '@/infrastructure/provider/IClient';
import IUserRepository from '@/interfaces/repository/user/IUserRepository';
import { GetUserClassResponse, GetUserClassRootParams } from './getUserClass';

export class UserRepository implements IUserRepository {
  constructor(private readonly _client: IClient) {}

  async fetchAll(): Promise<GetUserClassResponse[]> {
    const { data } = await this._client.get<GetUserClassResponse[]>(
      API + USERS,
    );
    return data;
  }

  async fetch(
    rootParams: GetUserClassRootParams,
  ): Promise<GetUserClassResponse> {
    const { data } = await this._client.get<GetUserClassResponse>(
      API + `${USERS}/${rootParams}`,
    );
    return data;
  }

  fetchSWR(): SwrResponse<'loading', GetUserClassResponse[] | undefined> {
    const { data, error } = this._client.useSwr<GetUserClassResponse[]>(
      API + USERS,
    );

    return {
      data: data,
      error,
      isLoading: !error && !data,
    };
  }
}
