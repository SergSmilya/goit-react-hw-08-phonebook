import { Outlet } from 'react-router';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';

export default function SharedLayout(params) {
  return (
    <>
      <UserMenu />
      <Navigation />
      <Outlet />
    </>
  );
}
