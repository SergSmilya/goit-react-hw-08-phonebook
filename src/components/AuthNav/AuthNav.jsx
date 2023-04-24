import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <Box>
      <ul>
        <li>
          <NavLink to="/register">Registration</NavLink>
        </li>
        <li>
          <NavLink to="/login">LogIn</NavLink>
        </li>
      </ul>
    </Box>
  );
}
