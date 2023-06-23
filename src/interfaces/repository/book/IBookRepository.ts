import { SwrResponse } from '@/application/types';
import {
  Data,
  GetBookClassResponse,
  GetBookClassRootParams,
} from './types/getBookClass';

export default interface IBookRepository {
  fetchAll(): Promise<GetBookClassResponse<Data[]>>;
  fetch(
    rootParams: GetBookClassRootParams,
  ): Promise<GetBookClassResponse<Data>>;
  fetchSWR(): SwrResponse<'loading', GetBookClassResponse<Data[]>>;
}
