import { API, AUTH } from '@/infrastructure/Path';
import IClient from '@/infrastructure/provider/IClient';
import { AuthForm, IAuthRepository } from './IAuthRepository';

export class AuthRepository implements IAuthRepository {
  constructor(private readonly client: IClient) {}

  async getCsrfToken(): Promise<void> {
    const { data } = await this.client.get<{ csrfToken: string }>(
      API + AUTH + '/csrf',
    );
    console.log('getCsrfToken', data);
    this.client.defaults.headers.common['X-CSRF-TOKEN'] = data.csrfToken;
  }

  async postLogin(formData: AuthForm): Promise<void> {
    await this.client.post(API + AUTH + '/login', {
      email: formData.email,
      password: formData.password,
    });
    console.log('postLogin');
  }

  async postLogout(): Promise<void> {
    await this.client.post<{ message: string }>(API + AUTH + '/logout');
  }
}
