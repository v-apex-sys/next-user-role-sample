import { SwrResponse } from '@/application/types';
import {
  CreateBookClassParams,
  FetchAllBookClassResponse,
  FetchBookClassResponse,
  FetchBookClassRootParams,
  FetchSWRBookClassResponse,
  UpdateBookClassParams,
  UpdateBookClassRootParams,
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

  async update(
    rootParams: UpdateBookClassRootParams,
    params: UpdateBookClassParams,
  ): Promise<void> {
    const useCase = facade.update;
    useCase.execute(rootParams, params);
  }

  async create(params: CreateBookClassParams): Promise<void> {
    const useCase = facade.create;
    useCase.execute(params);
  }
}

const bookUseCase = new BookUseCase();

export default bookUseCase;
