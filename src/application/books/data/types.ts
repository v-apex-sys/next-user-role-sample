import { Book } from '@/domain/models/books/book';
import { Author, Id, Title } from '@/domain/models/books/vo';

export interface FetchBookClassRootParams {
  id: Id;
}

export type FetchBookClassResponse = Book;

export type FetchAllBookClassResponse = Book[];

export type FetchSWRBookClassResponse = Book[];

export interface UpdateBookClassRootParams {
  id: Id;
}

export interface UpdateBookClassParams {
  title: Title;
  author: Author;
}

export interface CreateBookClassParams {
  title: Title;
  author: Author;
}
