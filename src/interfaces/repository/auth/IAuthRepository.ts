export type AuthForm = {
  email: string;
  password: string;
};

export interface IAuthRepository {
  getCsrfToken(): Promise<void>;
  postLogin(formData: AuthForm): Promise<void>;
  postLogout(): Promise<void>;
}
