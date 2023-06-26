import { AdminAccount } from '@/domain/models/account/adminAccount';
import { ViewerAccount } from '@/domain/models/account/viewerAccount';
import { RoleType } from '@/domain/models/role/role';

export interface IFetch {
  execute: (role: RoleType) => Promise<AdminAccount | ViewerAccount>;
}
