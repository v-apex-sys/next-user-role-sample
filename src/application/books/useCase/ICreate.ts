import { CreateBookClassParams } from '../data/types';

export interface ICreate {
  execute: (params: CreateBookClassParams) => Promise<void>;
}
