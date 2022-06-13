import { useUser } from '@global/hooks/useUser';
import { pageWithCookieAndSeo } from '@global/utils/pageWithCookieAndSeo';
import { UserRole } from '@shared/enums/user-role.enum';
import { InferGetServerSidePropsType } from 'next';

import { UserLayout } from '../../components/layouts/UserLayout';
import { StatsPage } from '../../containers/StatsPage';

const Page = ({ user }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  useUser(user);

  return (
    <UserLayout>
      <StatsPage />
    </UserLayout>
  );
};

export const getServerSideProps = pageWithCookieAndSeo('userStats', UserRole.user);
export default Page;
