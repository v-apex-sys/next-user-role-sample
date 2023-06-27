import { AuthForm } from '@/interfaces/repository/auth/IAuthRepository';
import facade from './facade';

class AuthUseCase {
  async fetchCsrfToken(): Promise<void> {
    const useCase = facade.fetchCsrfToken;
    await useCase.execute();
  }

  async login(formData: AuthForm): Promise<void> {
    const useCase = facade.login;
    await useCase.execute(formData);
  }

  async logout(): Promise<void> {
    const useCase = facade.logout;
    await useCase.execute();
  }
}

export const authUseCase = new AuthUseCase();
