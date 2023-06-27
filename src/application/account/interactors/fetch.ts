import { IFetch } from '@/application/account/useCase/IFetch';
import { Account } from '@/domain/models/account/account';
import { AdminAccount } from '@/domain/models/account/adminAccount';
import { AccountBuilder } from '@/domain/models/account/builder/accountBuilder';
import { Director } from '@/domain/models/account/builder/director';
import { ViewerAccount } from '@/domain/models/account/viewerAccount';
import { Role, RoleType } from '@/domain/models/role/role';
import { IAccountRepository } from '@/interfaces/repository/account/IAccountRepository';

export class Fetch implements IFetch {
  constructor(private readonly accountRepository: IAccountRepository) {}

  async execute(
    role?: RoleType,
  ): Promise<AdminAccount | ViewerAccount | undefined> {
    const account = await this.accountRepository.find();
    console.log('class Fetch account: ', account);

    const builder = new AccountBuilder(new Account());
    const director = new Director(builder);

    if (role === Role.ADMIN) {
      return director.buildAdminAccount(
        account.id,
        'admin',
        account.name,
        account.email,
        account.password,
        account.companyName,
      );
    }
    if (role === Role.VIEWER) {
      return director.buildViewerAccount(
        account.id,
        'viewer',
        account.name,
        account.email,
        account.password,
      );
    }

    // NOTE: undefinedではなく空のuserが都合よければそのようにする
    return undefined;
  }
}
