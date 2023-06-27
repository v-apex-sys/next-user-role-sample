import { ILogin } from '@/application/auth/useCase/ILogin';
import { IAuthRepository } from '@/interfaces/repository/auth/IAuthRepository';

export class Logout implements ILogin {
  constructor(private readonly authRepository: IAuthRepository) {}

  async execute(): Promise<void> {
    await this.authRepository.postLogout();
  }
}
