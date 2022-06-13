import { useUser } from '@global/hooks/useUser';
import { pageWithCookieAndSeo } from '@global/utils/pageWithCookieAndSeo';
import { UserRole } from '@shared/enums/user-role.enum';
import { InferGetServerSidePropsType } from 'next';

import { UserLayout } from '../../components/layouts/UserLayout';
import { BalancePage } from '../../containers/BalancePage';

const Page = ({ user }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  useUser(user);

  return (
    <UserLayout>
      <BalancePage />
    </UserLayout>
  );
};

export const getServerSideProps = pageWithCookieAndSeo('userBalance', UserRole.user);
export default Page;
