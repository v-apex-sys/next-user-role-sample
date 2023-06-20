// application層共通で仕様されるResponse

type SwrResponseType = 'all' | 'standard' | 'mutate' | 'loading';

export type SwrResponse<
  Type extends SwrResponseType = 'all',
  Data = any,
  Error = any,
> = Type extends 'all'
  ? {
      data?: Data;
      error?: Error;
      handleRefresh: () => void;
      isValidating: boolean;
      isLoading: boolean;
    }
  : Type extends 'standard'
  ? {
      data?: Data;
      error?: Error;
      handleRefresh: () => void;
      isLoading: boolean;
    }
  : Type extends 'mutate'
  ? {
      data?: Data;
      error?: Error;
      handleRefresh: () => void;
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
      handleRefresh: () => void;
      isValidating: boolean;
      isLoading: boolean;
    };

// カスタムジェネリクス

/** 型の中の特定のプロパティを新しいプロパティに差し替える
 * @param {type} T 操作する型
 * @param {string} From 変更するプロパティのkey名
 * @param {string} To 変更後のプロパティのkey名
 * @param {type} Type 変更後のプロパティのvalueの型
 * @return {type} Tに属する特定のプロパティの名称と型定義だけを変更し、それ以外はTと同じ型
 */
export type Replace<T, From extends string, To extends string, Type = any> = Omit<T, From> & {
  [P in To]: Type;
};
