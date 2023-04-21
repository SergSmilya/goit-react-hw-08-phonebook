import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsRefreshing, selectLoggedIn } from 'redux/selectors';

export default function PublicRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(selectLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
}
