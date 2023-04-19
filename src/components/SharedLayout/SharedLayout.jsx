import { Outlet } from 'react-router';
import Navigation from 'components/Navigation/Navigation';

export default function SharedLayout(params) {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
