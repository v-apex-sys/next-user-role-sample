import { IFetchAll } from '@/application/users/useCase/IFetchAll';
import { User } from '@/domain/models/users/user';
import IUserRepository from '@/interfaces/repository/user/IUserRepository';
import { FetchAllUserClassResponse } from '../data/types';

export class FetchAll implements IFetchAll {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(): Promise<FetchAllUserClassResponse> {
    const users = await this.userRepository.getAll();
    return users?.data?.map((user) => {
      return new User(user.id, user.name, user.mailAddress);
    });
  }
}
