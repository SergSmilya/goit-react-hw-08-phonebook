import {
  AppBar,
  Box,
  IconButton,
  Link,
  Menu,
  MenuItem,
  MenuList,
  Toolbar,
} from '@mui/material';
import { useRef, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link as RouterLink } from 'react-router-dom';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'redux/selectors';

export default function MenuAppBar() {
  const isLoggedIn = useSelector(selectLoggedIn);
  const [baseAnchorEl, setBaseAnchorEl] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const baseBattonEl = useRef(null);

  // BaseMenu
  const handleOpenBaseMenu = () => setBaseAnchorEl(baseBattonEl.current);
  const handleCloseBaseMenu = () => setBaseAnchorEl(null);

  // AuthMenu
  const handleAuthOpenMenu = e => setAnchorEl(e.currentTarget);
  const handleAuthCloseMenu = () => setAnchorEl(null);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div>
            <IconButton
              ref={baseBattonEl}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleOpenBaseMenu}
            >
              <MenuIcon />
            </IconButton>

            {/* BaseMenu */}
            <Menu
              variant="selectedMenu"
              anchorEl={baseAnchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(baseAnchorEl)}
              onClose={handleCloseBaseMenu}
            >
              {!isLoggedIn && (
                <MenuList>
                  <Link
                    to="/register"
                    component={RouterLink}
                    variant="h6"
                    color="inherit"
                    underline="none"
                    sx={{ flexGrow: 1, width: 200 }}
                  >
                    <MenuItem onClick={handleCloseBaseMenu}>
                      Regitsration
                    </MenuItem>
                  </Link>

                  <Link
                    to="/login"
                    component={RouterLink}
                    variant="h6"
                    color="inherit"
                    underline="none"
                    sx={{ flexGrow: 1, width: 200 }}
                  >
                    <MenuItem onClick={handleCloseBaseMenu}>LogIn</MenuItem>
                  </Link>
                </MenuList>
              )}
              <Link
                to="/contacts"
                component={RouterLink}
                variant="h6"
                color="inherit"
                underline="none"
                sx={{ flexGrow: 1, width: 200 }}
              >
                <MenuItem onClick={handleCloseBaseMenu}>Contacts</MenuItem>{' '}
              </Link>
              {/* {!isLoggedIn && (
                <MenuList>
                  <MenuItem onClick={handleCloseBaseMenu}>
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

                  <MenuItem onClick={handleCloseBaseMenu}>
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
              <MenuItem onClick={handleCloseBaseMenu}>
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
              </MenuItem> */}
            </Menu>
          </div>

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
          {isLoggedIn && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleAuthOpenMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleAuthCloseMenu}
              >
                <MenuItem onClick={handleAuthCloseMenu}>
                  <UserMenu />
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// import {
//   AppBar,
//   Box,
//   IconButton,
//   Link,
//   Menu,
//   MenuItem,
//   MenuList,
//   Toolbar,
//   Typography,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link as RouterLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectLoggedIn, setlectUserName } from 'redux/selectors';
// import { AccountCircle } from '@mui/icons-material';
// import { useRef, useState } from 'react';
// import UserMenu from 'components/UserMenu/UserMenu';

// export default function MenuAppBar() {
//   const isLoggedIn = useSelector(selectLoggedIn);
//   const [anchor, setAnchor] = useState(null);
//   const [isOpenGeneralMenu, setIsOpenGeneralMenu] = useState(null);
//   const userName = useSelector(setlectUserName);
//   const burgerMenu = useRef(null);

//   const handleMenu = event => {
//     setAnchor(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchor(null);
//   };

//   const handleOpenGeneralMenu = e => setIsOpenGeneralMenu(e.currentTarget);
//   const handleCloseGeneralMenu = () => setIsOpenGeneralMenu(null);

//   return (
//     <Box sx={{ flexGrow: 1, mb: 3 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             ref={burgerMenu}
//             id="basic-button"
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             aria-haspopup="true"
//             onClick={handleOpenGeneralMenu}
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>

//           {/* General Menu */}
//           <Menu
//             id="basic-menu"
//             open={Boolean(isOpenGeneralMenu)}
//             anchorEl={() => burgerMenu.current}
//             onClose={handleCloseGeneralMenu}
//             aria-haspopup="true"
//             MenuListProps={{
//               'aria-labelledby': 'basic-button',
//             }}
//           >
//             {!isLoggedIn && (
//               <MenuList>
//                 <MenuItem onClick={handleCloseGeneralMenu}>
// <Link
//   to="/register"
//   component={RouterLink}
//   variant="h6"
//   color="inherit"
//   underline="none"
//   sx={{ flexGrow: 1, width: 200 }}
// >
//   Regitsration
// </Link>
//                 </MenuItem>
//                 <MenuItem onClick={handleCloseGeneralMenu}>
// <Link
//   to="/login"
//   component={RouterLink}
//   variant="h6"
//   color="inherit"
//   underline="none"
//   sx={{ flexGrow: 1, width: 200 }}
// >
//   LogIn
// </Link>
//                 </MenuItem>
//               </MenuList>
//             )}

//             <MenuItem onClick={handleCloseGeneralMenu}>
//               <Link
//                 to="/contacts"
//                 component={RouterLink}
//                 variant="h6"
//                 color="inherit"
//                 underline="none"
//                 sx={{ flexGrow: 1, width: 200 }}
//               >
//                 Contacts
//               </Link>
//             </MenuItem>
//           </Menu>

//           <Link
//             to="/"
//             component={RouterLink}
//             variant="h4"
//             color="inherit"
//             underline="none"
//             sx={{ flexGrow: 1, width: 200 }}
//           >
//             Phonebook
//           </Link>

//           {/* UserMenu */}
//           {isLoggedIn && (
//             <Box sx={{ display: 'contents' }}>
//               <Typography variant="h5" component="div">
//                 {userName}
//               </Typography>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleMenu}
//                 color="inherit"
//               >
//                 <AccountCircle />
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchor}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 open={Boolean(anchor)}
//                 onClose={handleClose}
//               >
//                 <UserMenu />
//               </Menu>
//             </Box>
//           )}
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
