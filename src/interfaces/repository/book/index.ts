import { API, BOOKS } from '@/infrastructure/Path';
import IClient from '@/infrastructure/provider/IClient';
import IBookRepository from '@/interfaces/repository/book/IBookRepository';
import { SwrResponse } from '@/interfaces/repository/types';
import {
  Data,
  GetBookClassResponse,
  GetBookClassRootParams,
} from './types/getBookClass';
import { PutBookClassRequest } from './types/putBookClass';

export class BookRepository implements IBookRepository {
  constructor(private readonly _client: IClient) {}

  async getAll(): Promise<GetBookClassResponse<Data[]>> {
    const { data } = await this._client.get<GetBookClassResponse<Data[]>>(
      API + BOOKS,
    );
    return data;
  }

  async get(
    rootParams: GetBookClassRootParams,
  ): Promise<GetBookClassResponse<Data>> {
    const { data } = await this._client.get<GetBookClassResponse<Data>>(
      API + `${BOOKS}/${rootParams.id}`,
    );
    return data;
  }

  getSWR(): SwrResponse<'loading', GetBookClassResponse<Data[]> | undefined> {
    const { data, error } = this._client.useSwr<GetBookClassResponse<Data[]>>(
      API + BOOKS,
    );

    return {
      data: data,
      error,
      isLoading: !error && !data,
    };
  }

  async put(
    rootParams: GetBookClassRootParams,
    request: PutBookClassRequest,
  ): Promise<void> {
    this._client.put(API + `${BOOKS}/${rootParams.id}`, request);
  }

  async post(request: PutBookClassRequest): Promise<void> {
    this._client.post(API + `${BOOKS}`, request);
  }
}
