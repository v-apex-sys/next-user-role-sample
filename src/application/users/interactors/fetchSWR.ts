import { SwrResponse } from '@/application/types';
import { IFetchSWR } from '@/application/users/useCase';
import { User } from '@/domain/models/users/user';
import IUserRepository from '@/interfaces/repository/user/IUserRepository';

export class FetchSWR implements IFetchSWR {
  constructor(private readonly userRepository: IUserRepository) {}

  execute(): SwrResponse<'loading', User[] | undefined> {
    const { data, error } = this.userRepository.fetchSWR();

    const users = data?.map((user) => {
      return new User(user.id, user.name, user.mailAddress);
    });

    return { data: users, error, isLoading: !error && !data };
  }
}
