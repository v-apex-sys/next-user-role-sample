import { Fetch } from '@/application/account/interactors/fetch';
import httpClientFactory from '@/infrastructure/HttpClientFactory';
import IClient from '@/infrastructure/provider/IClient';
import { AccountRepository } from '@/interfaces/repository/account/accountRepository';

class AccountFactory {
  private _fetch?: Fetch;

  constructor(private readonly _client: IClient) {}

  get fetch() {
    if (!this._fetch) {
      const repository = new AccountRepository(this._client);
      this._fetch = new Fetch(repository);
    }
    return this._fetch;
  }
}

const facade = new AccountFactory(httpClientFactory.getClient());

export default facade;
