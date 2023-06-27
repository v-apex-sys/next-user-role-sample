import { AdminAccount } from '@/domain/models/account/adminAccount';
import { ViewerAccount } from '@/domain/models/account/viewerAccount';
import { RoleType } from '@/domain/models/role/role';
import facade from './facade';

class AccountUseCase {
  async fetch(
    role?: RoleType,
  ): Promise<AdminAccount | ViewerAccount | undefined> {
    const useCase = facade.fetch;
    const result = await useCase.execute(role);
    return result;
  }
}

export const accountUseCase = new AccountUseCase();
