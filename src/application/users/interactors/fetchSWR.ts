import { IFetchSWR } from '@/application/users/useCase';
import { User } from '@/domain/models/users/user';
import { SwrResponse } from '@/interfaces/repository/types';
import IUserRepository from '@/interfaces/repository/user/IUserRepository';
import { FetchSWRUserClassResponse } from '../data/types';

export class FetchSWR implements IFetchSWR {
  constructor(private readonly userRepository: IUserRepository) {}

  execute(): SwrResponse<'loading', FetchSWRUserClassResponse> {
    const { data, error } = this.userRepository.fetchSWR();

    const users = data?.data?.map((user) => {
      return new User(user.id, user.name, user.mailAddress);
    });

    return { data: users, error, isLoading: !error && !data };
  }
}
