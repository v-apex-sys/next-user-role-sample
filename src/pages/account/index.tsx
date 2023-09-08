import { AdminAccount } from '@/domain/models/account/adminAccount';
import { accountGetters } from '@/store/account';
import Link from 'next/link';

export default function Page() {
  const { account } = accountGetters.useAccount();

  return (
    <div>
      <h1>account page</h1>
      {account && (
        <div key={account?.id} style={{ marginBottom: '50px' }}>
          <p>{account?.id}</p>
          <p>{account?.name}</p>
          <p>{account?.email}</p>
          <p>{account?.password}</p>
          <p>{account instanceof AdminAccount && account.companyName}</p>
          <p>{account instanceof AdminAccount && account.adminOnly()}</p>
          <Link href="/" prefetch={false}>
            <p>to Home</p>
          </Link>
        </div>
      )}
    </div>
  );
}

// 適当なpropsを返せば404が発生しなくなるかのテスト
export async function getStaticSideProps(context: any) {
  return {
    props: {},
  };
}
