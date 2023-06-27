import { roleUseCase } from '@/application/role';
import { useCallback } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

import { RECOIL_ATOMS_KEYS } from '../keys';
import { RoleActions, RoleGetters, RoleState } from './types';

// state はそのまま export しない、getters と actions を export する
const roleState = atom<RoleState>({
  key: RECOIL_ATOMS_KEYS.ROLE,
  default: {
    role: undefined,
    isFetching: true,
  },
});

// Getter的役割
const useRole = () => {
  return useRecoilValue(roleState);
};

export const roleGetters: RoleGetters = {
  useRole,
};

// Action をカスタムフックとして定義
/**  role の fetch */
const useFetchRole = () => {
  const setState = useSetRecoilState(roleState);

  const fetchRole = useCallback(async () => {
    setState({
      isFetching: true,
    });

    const roleType = await roleUseCase.fetch();

    console.log('roleType', roleType);

    setState(() => {
      if (!roleType) {
        console.log('roleType is undefined', roleType);
        return {
          role: undefined,
          isFetching: false,
        };
      }
      console.log('roleType is not undefined', roleType);
      return {
        role: roleType,
        isFetching: false,
      };
    });
  }, [setState]);

  return { fetchRole };
};

export const roleActions: RoleActions = {
  useFetchRole,
};
