import {
  AppBar,
  Box,
  IconButton,
  Link,
  Menu,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLoggedIn, setlectUserName } from 'redux/selectors';
import { AccountCircle } from '@mui/icons-material';
import { useRef, useState } from 'react';
import UserMenu from 'components/UserMenu/UserMenu';

export default function MenuAppBar() {
  const isLoggedIn = useSelector(selectLoggedIn);
  const [anchor, setAnchor] = useState(null);
  const [isOpenGeneralMenu, setIsOpenGeneralMenu] = useState(false);
  const userName = useSelector(setlectUserName);
  const burgerMenu = useRef(null);

  const handleMenu = event => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  function handleOpenGeneralMenu() {
    setIsOpenGeneralMenu(true);
  }

  function handleCloseGeneralMenu() {
    setIsOpenGeneralMenu(false);
  }

  return (
    <Box sx={{ flexGrow: 1, mb: 3 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            ref={burgerMenu}
            id="general-menu"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleOpenGeneralMenu}
            // sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* General Menu */}
          <Menu
            id="general-menu"
            open={isOpenGeneralMenu}
            anchorEl={() => burgerMenu.current}
            onClose={handleCloseGeneralMenu}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {!isLoggedIn && (
              <MenuList>
                <MenuItem onClick={handleCloseGeneralMenu}>
                  <Link
                    to="/register"
                    component={RouterLink}
                    variant="h6"
                    color="inherit"
                    underline="none"
                    sx={{ flexGrow: 1, width: 200 }}
                  >
                    Regitsration
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseGeneralMenu}>
                  <Link
                    to="/login"
                    component={RouterLink}
                    variant="h6"
                    color="inherit"
                    underline="none"
                    sx={{ flexGrow: 1, width: 200 }}
                  >
                    LogIn
                  </Link>
                </MenuItem>
              </MenuList>
            )}

            <MenuItem onClick={handleCloseGeneralMenu}>
              <Link
                to="/contacts"
                component={RouterLink}
                variant="h6"
                color="inherit"
                underline="none"
                sx={{ flexGrow: 1, width: 200 }}
              >
                Contacts
              </Link>
            </MenuItem>
          </Menu>

          <Link
            to="/"
            component={RouterLink}
            variant="h4"
            color="inherit"
            underline="none"
            sx={{ flexGrow: 1, width: 200 }}
          >
            Phonebook
          </Link>

          {/* UserMenu */}
          {isLoggedIn && (
            <Box sx={{ display: 'contents' }}>
              <Typography variant="h5" component="div">
                {userName}
              </Typography>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchor}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchor)}
                onClose={handleClose}
              >
                <UserMenu />
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}