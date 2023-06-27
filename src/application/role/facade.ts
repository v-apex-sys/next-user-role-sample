import { Fetch } from '@/application/role/interactors/fetch';
import httpClientFactory from '@/infrastructure/HttpClientFactory';
import IClient from '@/infrastructure/provider/IClient';
import { RoleRepository } from '@/interfaces/repository/role/roleRepository';

class RoleFactory {
  private _fetch?: Fetch;

  constructor(private readonly _client: IClient) {}

  get fetch() {
    if (!this._fetch) {
      const repository = new RoleRepository(this._client);
      this._fetch = new Fetch(repository);
    }
    return this._fetch;
  }
}

const facade = new RoleFactory(httpClientFactory.getClient());

export default facade;
