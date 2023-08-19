import { currentUserNameQuery } from '@/store/current-user';
import { roleGetters } from '@/store/role';
import Link from 'next/link';
import { Suspense } from 'react';
import { useRecoilValue } from 'recoil';

const CurrentUserInfo = () => {
  const userName = useRecoilValue(currentUserNameQuery);

  return <div>{userName}</div>;
};

const Index = () => {
  const { role } = roleGetters.useRole();

  return (
    <>
      <p>Role: {role && role}</p>
      <Link href="/user">
        <p>to User</p>
      </Link>
      <Link href="/account">
        <p>to Account</p>
      </Link>

      <p>読み込み後にUserの名前が表示される</p>
      <Suspense fallback={<p>3秒間 読み込み中...</p>}>
        <CurrentUserInfo />
      </Suspense>
    </>
  );
};

export default Index;
