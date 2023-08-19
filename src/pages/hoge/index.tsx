import { GetServerSideProps } from 'next';
import Link from 'next/link';

type Props = {
  data: any;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};

/**
 * hogeページではadmin権限でのみ閲覧できる秘匿な情報をSSRで取得して表示している
 */
export default function HogePage({ data }: Props) {
  return (
    <>
      <h1>hoge page</h1>
      <h2 style={{ color: 'red' }}>社外秘</h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          marginBottom: '40px',
        }}
      >
        {data.map((d: any) => (
          <div key={d.id}>
            <p>ID: {d.id}</p>
            <p>タイトル: {d.title}</p>
            <p>本文: {d.body}</p>
          </div>
        ))}
      </div>

      <Link href="/">
        <p>to Home</p>
      </Link>
    </>
  );
}
