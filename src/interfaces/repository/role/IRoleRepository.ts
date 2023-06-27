import { RoleType } from '@/domain/models/role/role';

export interface IRoleRepository {
  fetch(): Promise<RoleType>;
}
