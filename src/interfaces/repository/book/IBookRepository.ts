import { SwrResponse } from '@/application/types';
import {
  Data,
  GetBookClassResponse,
  GetBookClassRootParams,
} from './types/getBookClass';
import { PutBookClassRequest } from './types/putBookClass';

export default interface IBookRepository {
  fetchAll(): Promise<GetBookClassResponse<Data[]>>;
  fetch(
    rootParams: GetBookClassRootParams,
  ): Promise<GetBookClassResponse<Data>>;
  fetchSWR(): SwrResponse<'loading', GetBookClassResponse<Data[]>>;
  put(
    rootParams: GetBookClassRootParams,
    request: PutBookClassRequest,
  ): Promise<void>;
  post(request: PutBookClassRequest): Promise<void>;
}
