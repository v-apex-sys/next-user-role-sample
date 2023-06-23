import {
  UpdateBookClassParams,
  UpdateBookClassRootParams,
} from '../data/types';

export interface IUpdate {
  execute: (
    rootParams: UpdateBookClassRootParams,
    params: UpdateBookClassParams,
  ) => Promise<void>;
}
