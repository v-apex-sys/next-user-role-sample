import { SwrResponse } from '@/interfaces/repository/types';
import { FetchSWRUserClassResponse } from '../data/types';

export interface IFetchSWR {
  execute(): SwrResponse<'loading', FetchSWRUserClassResponse>;
}
