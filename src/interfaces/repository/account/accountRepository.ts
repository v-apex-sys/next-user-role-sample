import { Account } from '@/domain/models/account/account';
import IClient from '@/infrastructure/provider/IClient';
import { IAccountRepository } from './IAccountRepository';

export class AccountRepository implements IAccountRepository {
  constructor(private readonly client: IClient) {}

  async find(): Promise<Account> {
    const { data } = await this.client.get<Account>('/account');
    return data;
  }
}
