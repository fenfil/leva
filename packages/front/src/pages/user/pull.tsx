import { useUser } from '@global/hooks/useUser';
import { pageWithCookieAndSeo } from '@global/utils/pageWithCookieAndSeo';
import { UserRole } from '@shared/enums/user-role.enum';
import { InferGetServerSidePropsType } from 'next';

import { UserLayout } from '../../components/layouts/UserLayout';
import { PullPage } from '../../containers/PullPage';

const Page = ({ user }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  useUser(user);

  return (
    <UserLayout>
      <PullPage />
    </UserLayout>
  );
};

export const getServerSideProps = pageWithCookieAndSeo('userPull', UserRole.user);
export default Page;
