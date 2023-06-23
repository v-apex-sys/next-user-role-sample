import {
  FetchBookClassResponse,
  FetchBookClassRootParams,
} from '../data/types';

export interface IFetch {
  execute: (
    params: FetchBookClassRootParams,
  ) => Promise<FetchBookClassResponse>;
}
