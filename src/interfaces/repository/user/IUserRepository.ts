import { SwrResponse } from '@/application/types';
import { GetUserClassResponse, GetUserClassRootParams } from './getUserClass';

export default interface IUserRepository {
  fetchAll(): Promise<GetUserClassResponse[]>;
  fetch(rootParams: GetUserClassRootParams): Promise<GetUserClassResponse>;
  fetchSWR(): SwrResponse<'loading', GetUserClassResponse[]>;
}
