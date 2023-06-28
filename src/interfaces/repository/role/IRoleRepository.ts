import { RoleType } from '@/domain/models/role/role';

export interface IRoleRepository {
  get(): Promise<RoleType>;
}
