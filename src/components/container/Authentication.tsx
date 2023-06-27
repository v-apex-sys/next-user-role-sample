import { accountGetters } from '@/store/account';
import { ReactNode } from 'react';
import Loading from '../organisms/navigators/Loading';

interface Props {
  children: ReactNode;
}

/**
 * ログインユーザの情報をfetchしてstoreに格納する
 */
export const Authentication = ({ children }: Props) => {
  const { isFetching } = accountGetters.useAccount();

  return isFetching ? <Loading /> : children;
};
