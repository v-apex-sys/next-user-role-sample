import bookUseCase from '@/application/books';
import { Author, Title } from '@/domain/models/books/vo';
import Link from 'next/link';
import { useState } from 'react';

interface FormType {
  title: Title;
  author: Author;
}

const BookNew = () => {
  const [formInput, setFromInput] = useState<FormType>({
    title: '',
    author: '',
  });

  const handleClickCreate = async () => {
    await bookUseCase.create(formInput);
    console.log('完了');
  };

  return (
    <div>
      <h2>新規登録</h2>
      {/* react-hook-formへ変更 */}
      <p>
        タイトル:{' '}
        <input
          value={formInput.title}
          type="text"
          onChange={(e) =>
            setFromInput({
              ...formInput,
              title: e.target.value,
            })
          }
        />
      </p>
      <p>
        担当者:
        <input
          value={formInput.author}
          type="text"
          onChange={(e) =>
            setFromInput({
              ...formInput,
              author: e.target.value,
            })
          }
        />
      </p>
      <p>
        <button onClick={handleClickCreate}>登録</button>
      </p>
      <div>
        <Link href="/book">
          to Book
        </Link>
      </div>
    </div>
  );
};

export default BookNew;
