import { IFetch } from '@/application/role/useCase/IFetch';
import { RoleType } from '@/domain/models/role/role';
import { IRoleRepository } from '@/interfaces/repository/role/IRoleRepository';

export class Fetch implements IFetch {
  constructor(private readonly roleRepository: IRoleRepository) {}

  async execute(): Promise<RoleType> {
    const data = await this.roleRepository.get();
    return data;
  }
}
