import { ILogin } from '@/application/auth/useCase/ILogin';
import {
  AuthForm,
  IAuthRepository,
} from '@/interfaces/repository/auth/IAuthRepository';

export class Login implements ILogin {
  constructor(private readonly authRepository: IAuthRepository) {}

  async execute(formData: AuthForm): Promise<void> {
    await this.authRepository.postLogin(formData);
  }
}
