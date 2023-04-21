import { Outlet } from 'react-router';
import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'redux/selectors';
import UserMenu from 'components/UserMenu/UserMenu';

export default function SharedLayout() {
  const isLoggedIn = useSelector(selectLoggedIn);
  return (
    <>
      <header>
        <nav>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </nav>
        <h1>Phonebook</h1>
      </header>

      <Outlet />
    </>
  );
}
