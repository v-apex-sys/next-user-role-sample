import { SwrResponse } from '@/application/types';
import {
  Data,
  GetUserClassResponse,
  GetUserClassRootParams,
} from './types/getUserClass';

export default interface IUserRepository {
  fetchAll(): Promise<GetUserClassResponse<Data[]>>;
  fetch(
    rootParams: GetUserClassRootParams,
  ): Promise<GetUserClassResponse<Data>>;
  fetchSWR(): SwrResponse<'loading', GetUserClassResponse<Data[]>>;
}
