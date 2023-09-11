import bookUseCase from '@/application/books';
import { FetchAllBookClassResponse } from '@/application/books/data/types';
import Link from 'next/link';
import { useState } from 'react';

const BookIndex = () => {
  const [books, setBooks] = useState<FetchAllBookClassResponse>();

  const handleClick = async () => {
    const books = await bookUseCase.findAll();
    setBooks(books);
  };

  return (
    <>
      <div>
        <button onClick={handleClick}>FetchAll</button>
      </div>
      {books &&
        books.map((book) => (
          <div key={book.id}>
            <p>ID: {book.id}</p>
            <p>タイトル: {book.title}</p>
            <p>担当者: {book.author}</p>
            <p>作成日: {book.author}</p>
            <p>更新日: {book.updatedAt}</p>
            <Link href={`/book/detail/${book.id}`}>
              to Detail
            </Link>
          </div>
        ))}
      <p>
        <Link href={`/book/new`}>
          to New
        </Link>
      </p>
    </>
  );
};

export default BookIndex;
