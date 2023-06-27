import { IFetchCsrfToken } from '@/application/auth/useCase/IFetchCsrfToken';
import { IAuthRepository } from '@/interfaces/repository/auth/IAuthRepository';

export class FetchCsrfToken implements IFetchCsrfToken {
  constructor(private readonly authRepository: IAuthRepository) {}

  async execute(): Promise<void> {
    await this.authRepository.getCsrfToken();
  }
}
