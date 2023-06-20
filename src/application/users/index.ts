import { SwrResponse } from '@/application/types';
import {
  FetchAllUserClassResponse,
  FetchSWRUserClassResponse,
  FetchUserClassResponse,
  FetchUserClassRootParams,
} from './data/types';
import facade from './facade';

class UserUseCase {
  async findAll(): Promise<FetchAllUserClassResponse> {
    const useCase = facade.findAll;
    const result = await useCase.execute();
    return result;
  }

  async find(
    params: FetchUserClassRootParams,
  ): Promise<FetchUserClassResponse> {
    const useCase = facade.find;
    const result = await useCase.execute(params);
    return result;
  }

  fetchSWR(): SwrResponse<'loading', FetchSWRUserClassResponse> {
    const useCase = facade.fetchSWR;
    const result = useCase.execute();
    return result;
  }
}

const userUseCase = new UserUseCase();

export default userUseCase;
