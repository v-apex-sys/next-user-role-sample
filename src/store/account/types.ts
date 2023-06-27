import { AdminAccount } from '@/domain/models/account/adminAccount';
import { ViewerAccount } from '@/domain/models/account/viewerAccount';
import { RoleType } from '@/domain/models/role/role';

/** State の型 */
export type AccountState = {
  account?: AdminAccount | ViewerAccount;
  isFetching: boolean;
};

/** Getters の型 */
export type AccountGetters = {
  useAccount: () => AccountState;
};

/** Actions の型 */
export type AccountActions = {
  useFetchAccount: () => {
    fetchAccount: (role?: RoleType) => Promise<void>;
  };
};
