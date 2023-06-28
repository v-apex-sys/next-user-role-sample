import { Account } from '@/domain/models/account/account';

export interface IAccountRepository {
  get(): Promise<Account>;
}
