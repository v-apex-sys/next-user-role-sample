import { IFetch } from '@/application/books/useCase';
import { Book } from '@/domain/models/books/book';
import IBookRepository from '@/interfaces/repository/book/IBookRepository';
import {
  FetchBookClassResponse,
  FetchBookClassRootParams,
} from '../data/types';

export class Fetch implements IFetch {
  constructor(private readonly bookRepository: IBookRepository) {}

  async execute(
    params: FetchBookClassRootParams,
  ): Promise<FetchBookClassResponse> {
    const { data } = await this.bookRepository.get(params);
    return new Book(
      data.id,
      data.title,
      data.author,
      data.createdAt,
      data.updatedAt,
    );
  }
}
