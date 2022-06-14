import { useTypedSelector } from '@/store';
import { UserRole } from '@global/utils/UserRole';

export const useOnlyAdmin = () => {
  const isAdmin = useTypedSelector(
    (s) => [UserRole.admin, UserRole.moderator].includes(s.user.role) && s.user.userFetched,
  );
  return isAdmin;
};
