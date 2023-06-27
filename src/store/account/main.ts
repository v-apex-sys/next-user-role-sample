import { accountUseCase } from '@/application/account';
import { useCallback } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

import { RoleType } from '@/domain/models/role/role';
import { RECOIL_ATOMS_KEYS } from '../keys';
import { AccountActions, AccountGetters, AccountState } from './types';

// state はそのまま export しない、getters と actions を export する
const accountState = atom<AccountState>({
  key: RECOIL_ATOMS_KEYS.ACCOUNT,
  default: {
    account: undefined,
    isFetching: false,
  },
});

// Getter的役割
const useAccount = () => {
  return useRecoilValue(accountState);
};

export const accountGetters: AccountGetters = {
  useAccount,
};

// Action をカスタムフックとして定義
/**  account の fetch */
const useFetchAccount = () => {
  const setState = useSetRecoilState(accountState);

  const fetchAccount = useCallback(
    async (role?: RoleType) => {
      setState({
        isFetching: true,
      });

      const account = await accountUseCase.fetch(role);

      console.log('account', account);

      setState(() => {
        if (!account) {
          return {
            account: undefined,
            isFetching: false,
          };
        }
        return {
          account,
          isFetching: false,
        };
      });
    },
    [setState],
  );

  return { fetchAccount };
};

export const accountActions: AccountActions = {
  useFetchAccount,
};
