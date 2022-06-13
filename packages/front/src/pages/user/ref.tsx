import { ReferralSystemPage } from '@/containers/ReferralSystemPage';
import { useUser } from '@global/hooks/useUser';
import { pageWithCookieAndSeo } from '@global/utils/pageWithCookieAndSeo';
import { UserRole } from '@shared/enums/user-role.enum';
import { InferGetServerSidePropsType } from 'next';
import React from 'react';

import { UserLayout } from '../../components/layouts/UserLayout';

const Page = ({ user }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  useUser(user);

  return (
    <UserLayout>
      <ReferralSystemPage />
    </UserLayout>
  );
};

export const getServerSideProps = pageWithCookieAndSeo('userRef', UserRole.user);
export default Page;
