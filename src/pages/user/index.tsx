import userUseCase from '@/application/users';
import { User } from '@/domain/models/users/user';
import Link from 'next/link';
import { useState } from 'react';

const UserIndex = (pageProps:any) => {
  const [users, setUsers] = useState<User[]>();

  const handleClick = async () => {
    const users = await userUseCase.findAll();
    setUsers(users);
  };

  return (
    <>
      <div>
        <button onClick={handleClick}>FetchAll</button>
      </div>
      {users &&
        users.map((user) => (
          <>
            <p key={user.id}>
              ID: {user.id}、NAME: {user.name}、MailAddress: {user.mailAddress}
            </p>
            <Link href={`/user/detail/${user.id}`}>to Detail</Link>
          </>
        ))}
    </>
  );
};

export default UserIndex;

// 適当なpropsを返せば404が発生しなくなるかのテスト
export async function getStaticProps({ params }: any) {
  // const post = await getPost();
  return {
    props: {
      fake: 'data',
    },
  };
}
