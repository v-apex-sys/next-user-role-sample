import Loading from '@/components/organisms/navigators/Loading';
import { accountGetters } from '@/store/account';
import { roleActions, roleGetters } from '@/store/role';
import { ReactNode, useEffect } from 'react';

interface Props {
  children: ReactNode;
}

/**
 * 必要な情報を事前に取得
 */
export const Wrapper = ({ children }: Props) => {
  const { fetchRole } = roleActions.useFetchRole();
  const { role } = roleGetters.useRole();
  const accountLodable = accountGetters.useAccount();

  useEffect(() => {
    const fetchFunction = () => {
      if (!!role) {
        return;
      }
      fetchRole();
    };
    fetchFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (accountLodable.state === 'loading') {
    return <Loading />;
  }

  if (accountLodable.state === 'hasError') {
    return <div>エラーが発生しました</div>;
  }

  return children;
};
