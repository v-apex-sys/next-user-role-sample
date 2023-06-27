// 共通で仕様されるResponse

import { KeyedMutator } from 'swr';

type SwrResponseType = 'all' | 'standard' | 'mutate' | 'loading';

export type SwrResponse<
  Type extends SwrResponseType = 'all',
  Data = any,
  Error = any,
> = Type extends 'all'
  ? {
      data?: Data;
      error?: Error;
      mutate: KeyedMutator<Data>;
      isValidating: boolean;
      isLoading: boolean;
    }
  : Type extends 'standard'
  ? {
      data?: Data;
      error?: Error;
      mutate: KeyedMutator<Data>;
      isLoading: boolean;
    }
  : Type extends 'mutate'
  ? {
      data?: Data;
      error?: Error;
      mutate: KeyedMutator<Data>;
    }
  : Type extends 'loading'
  ? {
      data?: Data;
      error?: Error;
      isLoading: boolean;
    }
  : {
      data?: Data;
      error?: Error;
      mutate: KeyedMutator<Data>;
      isValidating: boolean;
      isLoading: boolean;
    };

export interface IResponse<T> {
  message: string;
  data: T;
}
