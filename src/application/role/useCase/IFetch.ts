import { RoleType } from '@/domain/models/role/role';

export interface IFetch {
  execute: () => Promise<RoleType>;
}
