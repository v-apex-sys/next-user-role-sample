import { SwrResponse } from '@/application/types';
import { FetchSWRBookClassResponse } from '../data/types';

export interface IFetchSWR {
  execute(): SwrResponse<'loading', FetchSWRBookClassResponse>;
}
