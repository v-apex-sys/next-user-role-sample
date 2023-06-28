import { SwrResponse } from '@/interfaces/repository/types';
import {
  Data,
  GetUserClassResponse,
  GetUserClassRootParams,
} from './types/getUserClass';

export default interface IUserRepository {
  getAll(): Promise<GetUserClassResponse<Data[]>>;
  get(
    rootParams: GetUserClassRootParams,
  ): Promise<GetUserClassResponse<Data>>;
  getSWR(): SwrResponse<'loading', GetUserClassResponse<Data[]>>;
}
