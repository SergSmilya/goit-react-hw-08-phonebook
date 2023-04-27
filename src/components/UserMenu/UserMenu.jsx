import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { setlectUserName } from 'redux/selectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(setlectUserName);

  return (
    <Box
      sx={{
        display: 'flex',
        width: 'auto',
        p: 1,
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="h5" component="div">
        {userName}
      </Typography>
      <Button
        variant="outlined"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
}
