import bookUseCase from '@/application/books';
import { FetchBookClassResponse } from '@/application/books/data/types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const BookDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState<FetchBookClassResponse>();

  useEffect(() => {
    const fetchFunction = async () => {
      const params = typeof id === 'string' ? id : '';
      if (!params) {
        return;
      }
      const book = await bookUseCase.find({ id: Number(params) });
      setBook(book);
    };
    fetchFunction();
  }, [id]);

  const handleClickEdit = async () => {
    // リアクティブな値を渡す
    await bookUseCase.update(
      { id: book?.id ?? 0 },
      { title: 'タイトル修正', author: '担当者修正' },
    );
    console.log('修正完了');
  };

  if (!book) {
    <p>is Loading...</p>;
  }

  return (
    book && (
      <div>
        <h2>詳細</h2>
        {/* react-hook-formへ変更 */}
        <p>ID: {book.id}</p>
        <p>
          タイトル: <input value={book.title} type="text" />
        </p>
        <p>
          担当者:
          <input value={book.author} type="text" />
        </p>
        <p>{book.createdAt}</p>
        <p>{book.updatedAt}</p>
        <p>
          <button onClick={handleClickEdit}>修正</button>
        </p>
        <div>
          <Link href="/book">to Book</Link>
        </div>
      </div>
    )
  );
};

export default BookDetail;
