import { RoleType } from '@/domain/models/role/role';
import facade from './facade';

class RoleUseCase {
  async fetch(): Promise<RoleType> {
    const useCase = facade.fetch;
    const result = await useCase.execute();
    return result;
  }
}

export const roleUseCase = new RoleUseCase();
