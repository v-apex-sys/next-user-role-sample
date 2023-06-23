import { FetchAllBookClassResponse } from '../data/types';

export interface IFetchAll {
  execute(): Promise<FetchAllBookClassResponse>;
}
