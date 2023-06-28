import { Account } from '@/domain/models/account/account';
import { API } from '@/infrastructure/Path';
import IClient from '@/infrastructure/provider/IClient';
import { IResponse } from '../types';
import { IAccountRepository } from './IAccountRepository';

export class AccountRepository implements IAccountRepository {
  constructor(private readonly client: IClient) {}

  async get(): Promise<Account> {
    // FIXME: IDは動的な値を渡す
    const { data } = await this.client.get<IResponse<Account>>(
      API + 'accounts/1',
    );
    return data.data;
  }
}
