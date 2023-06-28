import { SwrResponse } from '@/interfaces/repository/types';
import {
  Data,
  GetBookClassResponse,
  GetBookClassRootParams,
} from './types/getBookClass';
import { PutBookClassRequest } from './types/putBookClass';

export default interface IBookRepository {
  getAll(): Promise<GetBookClassResponse<Data[]>>;
  get(
    rootParams: GetBookClassRootParams,
  ): Promise<GetBookClassResponse<Data>>;
  getSWR(): SwrResponse<'loading', GetBookClassResponse<Data[]>>;
  put(
    rootParams: GetBookClassRootParams,
    request: PutBookClassRequest,
  ): Promise<void>;
  post(request: PutBookClassRequest): Promise<void>;
}
