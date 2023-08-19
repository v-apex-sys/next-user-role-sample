import { accountUseCase } from '@/application/account';
import { selector, useRecoilValueLoadable } from 'recoil';

import { RECOIL_ATOMS_KEYS } from '../keys';
import { roleState } from '../role/main';
import { AccountGetters, AccountState } from './types';

// state はそのまま export しない、getters と actions を export する
const accountState = selector<AccountState>({
  key: RECOIL_ATOMS_KEYS.ACCOUNT,
  get: async ({ get }) => {
    const role = get(roleState).role;
    if (!role) {
      return undefined;
    }
    return await accountUseCase.fetch(role);
  },
});

// Getter的役割
const useAccount = () => {
  return useRecoilValueLoadable(accountState);
};

export const accountGetters: AccountGetters = {
  useAccount,
};
