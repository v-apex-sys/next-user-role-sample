import userUseCase from '@/application/users';
import { User } from '@/domain/models/users/user';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const UserDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchFunction = async () => {
      const params = typeof id === 'string' ? id : '';
      const user = await userUseCase.find({ id: params });
      setUser(user);
    };
    fetchFunction();
  }, [id]);

  return (
    user && (
      <>
        <p>{user?.id}</p>
        <p>{user?.name}</p>
        <p>{user?.mailAddress}</p>
        <div>
          <Link href="/user" prefetch={false}>
            to User
          </Link>
        </div>
      </>
    )
  );
};

export default UserDetail;
