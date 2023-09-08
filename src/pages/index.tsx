import { roleGetters } from '@/store/role';
import Link from 'next/link';

const index = () => {
  const { role } = roleGetters.useRole();

  return (
    <>
      <p>Role: {role && role}</p>
      <Link href="/user" prefetch={false}>
        <p>to User</p>
      </Link>
      <Link href="/account" prefetch={false}>
        <p>to Account</p>
      </Link>
    </>
  );
};

export default index;
