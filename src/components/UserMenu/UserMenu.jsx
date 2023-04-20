import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { setlectUserName } from 'redux/selectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(setlectUserName);

  return (
    <div>
      <p>{userName}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
}
