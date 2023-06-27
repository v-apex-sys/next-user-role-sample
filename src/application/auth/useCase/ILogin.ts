import { AuthForm } from '@/interfaces/repository/auth/IAuthRepository';

export interface ILogin {
  execute(formData: AuthForm): Promise<void>;
}
