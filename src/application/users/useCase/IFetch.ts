import { User } from '@/domain/models/users/user';
import { FetchUserClassRootParams } from '../data/types';

export interface IFetch {
  execute: (params: FetchUserClassRootParams) => Promise<User>;
}
