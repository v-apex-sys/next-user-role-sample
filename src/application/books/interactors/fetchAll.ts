import { IFetchAll } from '@/application/books/useCase/IFetchAll';
import { Book } from '@/domain/models/books/book';
import IBookRepository from '@/interfaces/repository/book/IBookRepository';
import { FetchAllBookClassResponse } from '../data/types';

export class FetchAll implements IFetchAll {
  constructor(private readonly bookRepository: IBookRepository) {}

  async execute(): Promise<FetchAllBookClassResponse> {
    const books = await this.bookRepository.fetchAll();
    return books?.data?.map((data) => {
      return new Book(
        data.id,
        data.title,
        data.author,
        data.createdAt,
        data.updatedAt,
      );
    });
  }
}
