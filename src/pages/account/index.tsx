import { AdminAccount } from '@/domain/models/account/adminAccount';
import { accountGetters } from '@/store/account';
import Link from 'next/link';

// interface Props {
//   data: any;
// }

export default function Page() {
  // console.log(data);
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
          <Link href="/">
            <p>to Home</p>
          </Link>
        </div>
      )}
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { data } = await axios
//     .get('https://jsonplaceholder.typicode.com/todos')
//     .catch((error) => {
//       console.error(error);
//       return Promise.reject(error);
//     });

//   return { props: { data } };
// };
