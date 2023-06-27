import { FetchCsrfToken } from '@/application/auth/interactors/fetchCsrfToken';
import { Login } from '@/application/auth/interactors/login';
import { Logout } from '@/application/auth/interactors/logout';
import httpClientFactory from '@/infrastructure/HttpClientFactory';
import IClient from '@/infrastructure/provider/IClient';
import { AuthRepository } from '@/interfaces/repository/auth/authRepository';

class AuthFactory {
  private _fetchCsrfToken?: FetchCsrfToken;
  private _login?: Login;
  private _logout?: Logout;

  constructor(private readonly _client: IClient) {}

  get fetchCsrfToken() {
    if (!this._fetchCsrfToken) {
      const repository = new AuthRepository(this._client);
      this._fetchCsrfToken = new FetchCsrfToken(repository);
    }

    return this._fetchCsrfToken;
  }

  get login() {
    if (!this._login) {
      const repository = new AuthRepository(this._client);
      this._login = new Login(repository);
    }

    return this._login;
  }

  get logout() {
    if (!this._logout) {
      const repository = new AuthRepository(this._client);
      this._logout = new Logout(repository);
    }

    return this._logout;
  }
}

const facade = new AuthFactory(httpClientFactory.getClient());

export default facade;
