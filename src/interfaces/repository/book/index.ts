import { SwrResponse } from '@/application/types';
import { API, BOOKS } from '@/infrastructure/Path';
import IClient from '@/infrastructure/provider/IClient';
import IBookRepository from '@/interfaces/repository/book/IBookRepository';
import {
  Data,
  GetBookClassResponse,
  GetBookClassRootParams,
} from './types/getBookClass';

export class BookRepository implements IBookRepository {
  constructor(private readonly _client: IClient) {}

  async fetchAll(): Promise<GetBookClassResponse<Data[]>> {
    const { data } = await this._client.get<GetBookClassResponse<Data[]>>(
      API + BOOKS,
    );
    return data;
  }

  async fetch(
    rootParams: GetBookClassRootParams,
  ): Promise<GetBookClassResponse<Data>> {
    const { data } = await this._client.get<GetBookClassResponse<Data>>(
      API + `${BOOKS}/${rootParams.id}`,
    );
    return data;
  }

  fetchSWR(): SwrResponse<'loading', GetBookClassResponse<Data[]> | undefined> {
    const { data, error } = this._client.useSwr<GetBookClassResponse<Data[]>>(
      API + BOOKS,
    );

    return {
      data: data,
      error,
      isLoading: !error && !data,
    };
  }
}
