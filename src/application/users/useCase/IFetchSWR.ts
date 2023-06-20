import { SwrResponse } from '@/application/types';
import { FetchSWRUserClassResponse } from '../data/types';

export interface IFetchSWR {
  execute(): SwrResponse<'loading', FetchSWRUserClassResponse>;
}
