import { IFetchSWR } from '@/application/books/useCase';
import { SwrResponse } from '@/application/types';
import { Book } from '@/domain/models/books/book';
import IBookRepository from '@/interfaces/repository/book/IBookRepository';
import { FetchSWRBookClassResponse } from '../data/types';

export class FetchSWR implements IFetchSWR {
  constructor(private readonly bookRepository: IBookRepository) {}

  execute(): SwrResponse<'loading', FetchSWRBookClassResponse> {
    const { data, error } = this.bookRepository.fetchSWR();

    const books = data?.data?.map((data) => {
      return new Book(
        data.id,
        data.title,
        data.author,
        data.createdAt,
        data.updatedAt,
      );
    });

    return { data: books, error, isLoading: !error && !data };
  }
}
