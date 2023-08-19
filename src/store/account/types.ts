import { AdminAccount } from '@/domain/models/account/adminAccount';
import { ViewerAccount } from '@/domain/models/account/viewerAccount';
import { RoleType } from '@/domain/models/role/role';
import { Loadable } from 'recoil';

/** State の型 */
export type AccountState = AdminAccount | ViewerAccount | undefined;

/** Getters の型 */
export type AccountGetters = {
  useAccount: () => Loadable<AccountState>;
};

/** Actions の型 */
export type AccountActions = {
  useFetchAccount: () => {
    fetchAccount: (role?: RoleType) => Promise<void>;
  };
};
