import { SwrResponse } from '@/application/types';
import {
  FetchAllBookClassResponse,
  FetchBookClassResponse,
  FetchBookClassRootParams,
  FetchSWRBookClassResponse,
} from './data/types';
import facade from './facade';

class BookUseCase {
  async findAll(): Promise<FetchAllBookClassResponse> {
    const useCase = facade.findAll;
    const result = await useCase.execute();
    return result;
  }

  async find(
    params: FetchBookClassRootParams,
  ): Promise<FetchBookClassResponse> {
    const useCase = facade.find;
    const result = await useCase.execute(params);
    return result;
  }

  fetchSWR(): SwrResponse<'loading', FetchSWRBookClassResponse> {
    const useCase = facade.fetchSWR;
    const result = useCase.execute();
    return result;
  }
}

const bookUseCase = new BookUseCase();

export default bookUseCase;
