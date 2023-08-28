import Loading from '@/components/organisms/navigators/Loading';
import { accountActions, accountGetters } from '@/store/account';
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
  const { fetchAccount } = accountActions.useFetchAccount();
  const { account, isFetching } = accountGetters.useAccount();

  // NOTE: 今のrecoilパターンではSusspense難しいそう
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

  useEffect(() => {
    const fetchFunction = () => {
      if (!!account) {
        return;
      }
      if (!!role) {
        fetchAccount(role);
      }
    };
    fetchFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role, fetchAccount]);

  return isFetching ? <Loading /> : children;
};
