import { SwrResponse } from '@/application/types';
import { User } from '@/domain/models/users/user';

export interface IFetchSWR {
  execute(): SwrResponse<'loading', User[]>;
}
