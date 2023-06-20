import { SwrResponse } from '@/application/types';
import { User } from '@/domain/models/users/user';
import { FetchUserClassRootParams } from './data/types';
import facade from './facade';

class UserUseCase {
  async findAll(): Promise<User[]> {
    const useCase = facade.findAll;
    const result = await useCase.execute();
    return result;
  }

  async find(params: FetchUserClassRootParams): Promise<User> {
    const useCase = facade.find;
    const result = await useCase.execute(params);
    return result;
  }

  fetchSWR(): SwrResponse<'loading', User[]> {
    const useCase = facade.fetchSWR;
    const result = useCase.execute();
    return result;
  }
}

const userUseCase = new UserUseCase();

export default userUseCase;
