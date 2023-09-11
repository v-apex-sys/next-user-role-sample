import { roleGetters } from '@/store/role';
import Link from 'next/link';

const index = () => {
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
    </>
  );
};

export default index;
