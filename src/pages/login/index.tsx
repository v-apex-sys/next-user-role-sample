import { NextPage } from 'next';
import Link from 'next/link';

type Props = {};

const Login: NextPage<Props> = () => {
  return (
    <>
      <h1>Login page</h1>

      <Link href={'/'}>to Home</Link>
    </>
  );
};

export default Login;
