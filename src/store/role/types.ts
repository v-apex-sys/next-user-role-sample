import { RoleType } from '@/domain/models/role/role';

/** State の型 */
export type RoleState = {
  role?: RoleType;
  isFetching: boolean;
};

/** Getters の型 */
export type RoleGetters = {
  useRole: () => RoleState;
};

/** Actions の型 */
export type RoleActions = {
  useFetchRole: () => {
    fetchRole: () => Promise<void>;
  };
};
