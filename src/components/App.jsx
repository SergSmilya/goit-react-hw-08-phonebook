import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import SharedLayout from './SharedLayout/SharedLayout';
import RestrictedRoute from './RestrictedRoute';
import PublicRoute from './PublicRoute';
import { Container } from '@mui/material';
import { selectToken } from 'redux/selectors';

const RegisterPage = lazy(() => import('Pages/RegisterPage'));
const LoginPage = lazy(() => import('Pages/LoginPage'));
const ContactsPage = lazy(() => import('Pages/ContactsPage'));

export default function App() {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) dispatch(refreshUser());
    return;
  }, [token, dispatch]);

  return (
    <Container fixed>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route
              path="register"
              element={
                <RestrictedRoute
                  component={RegisterPage}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
              }
            />
            <Route
              path="contacts"
              element={
                <PublicRoute component={ContactsPage} redirectTo="/login" />
              }
            />
            <Route path="*" element={<SharedLayout />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
}
