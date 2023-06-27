import { SwrResponse } from '@/interfaces/repository/types';
import { FetchSWRBookClassResponse } from '../data/types';

export interface IFetchSWR {
  execute(): SwrResponse<'loading', FetchSWRBookClassResponse>;
}
