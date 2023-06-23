import IBookRepository from '@/interfaces/repository/book/IBookRepository';
import { CreateBookClassParams } from '../data/types';
import { ICreate } from '../useCase/ICreate';

export class Create implements ICreate {
  constructor(private readonly bookRepository: IBookRepository) {}

  async execute(params: CreateBookClassParams): Promise<void> {
    this.bookRepository.post(params);
  }
}
