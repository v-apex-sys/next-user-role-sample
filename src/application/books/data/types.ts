import { Book } from '@/domain/models/books/book';
import { Id } from '@/domain/models/books/vo';

export interface FetchBookClassRootParams {
  id: Id;
}

export type FetchBookClassResponse = Book;

export type FetchAllBookClassResponse = Book[];

export type FetchSWRBookClassResponse = Book[];
