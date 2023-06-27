import { RoleType } from '@/domain/models/role/role';
import { API } from '@/infrastructure/Path';
import IClient from '@/infrastructure/provider/IClient';
import { IRoleRepository } from './IRoleRepository';

export class RoleRepository implements IRoleRepository {
  constructor(private readonly client: IClient) {}

  async fetch(): Promise<RoleType> {
    const { data } = await this.client.get<{ role: RoleType }>(API + 'roles');
    return data.role;
  }
}
