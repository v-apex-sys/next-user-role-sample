import { AdminAccount } from '@/domain/models/account/adminAccount';
import { ViewerAccount } from '@/domain/models/account/viewerAccount';
import facade from './facade';

class AccountUseCase {
  async fetch(role: string): Promise<AdminAccount | ViewerAccount> {
    const useCase = facade.fetch;
    const result = await useCase.execute(role);
    return result;
  }
}

export const accountUseCase = new AccountUseCase();
