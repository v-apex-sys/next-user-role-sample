import { accountUseCase } from '@/application/account';
import { AdminAccount } from '@/domain/models/account/adminAccount';
import { ViewerAccount } from '@/domain/models/account/viewerAccount';
import { useState } from 'react';

export default function Page() {
  const [account, setAccount] = useState<AdminAccount | ViewerAccount>();
  const onClick = async () => {
    // TODO: roleはstoreから取得して渡す
    const account = await accountUseCase.fetch('viewer');
    setAccount(account);
  };
  return (
    <div>
      <h1>account page</h1>
      <button onClick={onClick}>fetch account</button>
      {account && (
        <div key={account?.id} style={{ marginBottom: '50px' }}>
          <p>{account?.id}</p>
          <p>{account?.name}</p>
          <p>{account?.email}</p>
          <p>{account?.password}</p>
          {/* <p>{account?.role}</p> */}
          <p>{account instanceof AdminAccount && account.companyName}</p>
          <p>{account instanceof AdminAccount && account.adminOnly()}</p>
        </div>
      )}
    </div>
  );
}
