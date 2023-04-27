import { Outlet } from 'react-router';
import MenuAppBar from 'components/MUI/MenuAppBar';

export default function SharedLayout() {
  // const isLoggedIn = useSelector(selectLoggedIn);
  return (
    <>
      <header>
        <MenuAppBar />
      </header>
      <Outlet />
    </>
  );
}
