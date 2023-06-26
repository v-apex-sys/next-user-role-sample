import { Account } from '@/domain/models/account/account';

export interface IAccountRepository {
  find(): Promise<Account>;
}
