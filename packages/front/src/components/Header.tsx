import { useTypedSelector } from '@/store';

import { Navigation } from './Navigation';

export const Header = () => {
  const user = useTypedSelector((s) => s.user.name);

  return (
    <div>
      <span>Hi {user || 'guest'}</span>
      <Navigation />
    </div>
  );
};
