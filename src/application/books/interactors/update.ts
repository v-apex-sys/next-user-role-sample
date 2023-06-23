import IBookRepository from '@/interfaces/repository/book/IBookRepository';
import {
  UpdateBookClassParams,
  UpdateBookClassRootParams,
} from '../data/types';
import { IUpdate } from '../useCase/IUpdate';

export class Update implements IUpdate {
  constructor(private readonly bookRepository: IBookRepository) {}

  async execute(
    rootParams: UpdateBookClassRootParams,
    params: UpdateBookClassParams,
  ): Promise<void> {
    this.bookRepository.put(rootParams, params);
  }
}
