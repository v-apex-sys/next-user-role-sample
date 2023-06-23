import httpClientFactory from '@/infrastructure/HttpClientFactory';
import IClient from '@/infrastructure/provider/IClient';
import { BookRepository } from '@/interfaces/repository/book';
import { Fetch, FetchAll, FetchSWR } from './interactors';
import { Create } from './interactors/create';
import { Update } from './interactors/update';

class UserFactory {
  private _findAll?: FetchAll;
  private _find?: Fetch;
  private _fetchSWR?: FetchSWR;
  private _update?: Update;
  private _create?: Create;

  constructor(private readonly _client: IClient) {}

  get findAll() {
    if (!this._findAll) {
      const repository = new BookRepository(this._client);
      this._findAll = new FetchAll(repository);
    }

    return this._findAll;
  }

  get find() {
    if (!this._find) {
      const repository = new BookRepository(this._client);
      this._find = new Fetch(repository);
    }

    return this._find;
  }

  get fetchSWR() {
    if (!this._fetchSWR) {
      const repository = new BookRepository(this._client);
      this._fetchSWR = new FetchSWR(repository);
    }

    return this._fetchSWR;
  }

  get update() {
    if (!this._update) {
      const repository = new BookRepository(this._client);
      this._update = new Update(repository);
    }

    return this._update;
  }

  get create() {
    if (!this._create) {
      const repository = new BookRepository(this._client);
      this._create = new Create(repository);
    }

    return this._create;
  }
}

const facade = new UserFactory(httpClientFactory.getClient());

export default facade;
