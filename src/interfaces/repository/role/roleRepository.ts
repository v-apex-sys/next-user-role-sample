import { RoleType } from '@/domain/models/role/role';
import IClient from '@/infrastructure/provider/IClient';
import { IRoleRepository } from './IRoleRepository';

export class RoleRepository implements IRoleRepository {
  constructor(private readonly client: IClient) {}

  async fetch(): Promise<RoleType> {
    const { data } = await this.client.get<RoleType>('/roles');
    return data;
  }
}
