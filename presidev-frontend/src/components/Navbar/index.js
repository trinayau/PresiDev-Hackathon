import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { NavHashLink } from 'react-router-hash-link';

import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

const Navbar = () => {


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

  let { user, logoutuser } = useContext(AuthContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLink = (link) => {
    handleCloseNavMenu();
    handleCloseUserMenu();
    navigate(link);
  };

  return (<>

    <header>
      <AppBar position="static" style={{ background: '#057465', boxShadow: 'none', padding: 0, maxWidth: '100% !important' }} className="d-flex align-items-center">
        <Container maxWidth="false">
          <Toolbar disableGutters sx={{ justifyContent: "space-between", padding: 0 }}>

            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={() => handleLink('/')}
              sx={{
                display: { xs: 'none', md: 'flex', lg: 'flex', xl: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'start' },
                fontFamily: 'Montserrat',
                fontWeight: 600,
                color: '#fff',
                fontSize: '30px',
                textDecoration: 'none',
                padding: '32px 0',
                width: '100%',
                letterSpacing: '0.8px',
                lineHeight: '1',
                "&:hover": {
                  color: '#9CD5CB',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease-in',
                  cursor: 'pointer',
                },
              }}
            >
              Presidium<span>Platform</span>
            </Typography>

            {/* Mobile */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon sx={{ color: 'rgba(255,255,255, 0.6)' }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <NavHashLink to="/" onClick={handleCloseNavMenu} style={{ textDecoration: 'none', color: '#000' }}>
                  <MenuItem key={'home'}
                  >
                    <Typography textAlign="center">Home</Typography>
                  </MenuItem>
                </NavHashLink>
                <NavHashLink to="/#about" onClick={handleCloseNavMenu} style={{ textDecoration: 'none', color: '#000' }}>
                  <MenuItem key={'about'}
                  >
                    <Typography textAlign="center">About</Typography>
                  </MenuItem>
                </NavHashLink>
                <NavHashLink to="/#contact" onClick={handleCloseNavMenu}>
                  <MenuItem key={'Contact'}>
                    <Typography textAlign="center">Contact</Typography>
                  </MenuItem>
                </NavHashLink>
                <NavHashLink to="/categories" onClick={handleCloseNavMenu}>
                  <MenuItem key={'Categories'}>
                    <Typography textAlign="center">Categories</Typography>
                  </MenuItem>
                </NavHashLink>
                {
                  user ? (
                    <MenuItem
                      key={'logout'}
                      onClick={() => logoutuser()}
                    >
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                  ) : (
                    <MenuItem
                      key={'login'}
                      onClick={() => handleLink('/login')}
                    >
                      <Typography textAlign="center" >Login</Typography>
                    </MenuItem>
                  )
                }


              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              onClick={() => handleLink('/')}
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none', flexDirection: 'row', alignItems: 'start', justifyContent: 'start' },
                flexGrow: 1,
                fontFamily: 'montserrat',
                fontWeight: 600,
                letterSpacing: '0rem',
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              Presidium Platform
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', lg: 'flex', xl: 'flex', flexDirection: "row", justifyContent: "end" } }}>

              <Button
                key={'home'}
                onClick={() => handleLink('/')}
                sx={{
                  my: 2, color: 'rgba(255, 255, 255, 0.6);', display: 'block', "&:hover": {
                    color: 'rgba(255, 255, 255, 0.6)',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease-in'
                  }
                }}
              >
                Home
              </Button>
              <NavHashLink to="/#about" smooth>
                <Button
                  key={'contact'}
                  sx={{
                    my: 2,
                    color: 'rgba(255, 255, 255, 0.6);',
                    display: 'block',
                    "&:hover": {
                      color: '#52796f',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease-in'
                    }
                  }}
                >
                  About
                </Button>
              </NavHashLink>
              <NavHashLink to="/#contact" smooth>
                <Button
                  key={'contact'}
                  sx={{
                    my: 2, color: 'rgba(255, 255, 255, 0.6);', display: 'block', "&:hover": {
                      color: '#52796f',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease-in'
                    }
                  }}
                >
                  Contact
                </Button>
              </NavHashLink>
  

              {user ? (
                <>
                  <Button
                  key={'categories'}
                  onClick={() => handleLink('/categories')}
                  sx={{
                    my: 2, color: 'rgba(255, 255, 255, 0.6);', display: 'block', "&:hover": {
                      color: '#52796f',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease-in'
                    }
                  }}
                >
                  Categories
                </Button>
                 <Button
                  key={'cart'}
                  onClick={() => handleLink('/cart')}
                  sx={{
                    my: 2,
                    color: 'rgba(255, 255, 255, 0.6);',
                    display: 'block',
                    "&:hover": {
                      color: '#52796f',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease-in'
                    }
                  }}
                >
                  Cart
                </Button>
                <Button
                  key={'logout'}
                  onClick={() => logoutuser()}
                  sx={{
                    my: 2, color: 'rgba(255, 255, 255, 0.6);', display: 'block', "&:hover": {
                      color: '#07060A',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease-in'
                    }
                  }}
                >
                  Logout
                </Button>
                </>
              ) : (
                <>
                  <NavHashLink to="/login" smooth>
                    <Button
                      key={'login'}
                      sx={{
                        my: 2,
                        color: 'rgba(255, 255, 255, 0.6)',
                        display: 'block', "&:hover": {
                          color: '#52796f',
                          textDecoration: 'none',
                          transition: 'all 0.2s ease-in'
                        }
                      }}
                    >
                      Login
                    </Button>
                  </NavHashLink>
                </>
              )}

            </Box>

            {/* End mobile */}

            {user && <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">

                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user && user.displayName} src="/static/images/avatar/2.jpg" sx={{ backgroundColor: '#00796b' }} />
                </IconButton>

              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right-start',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right-start',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                disableScrollLock={true}
              >
                <MenuItem key='profile' onClick={() => handleLink('/account')}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem key='logout' onClick={() => { logoutuser(); handleCloseUserMenu() }} >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>}
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  </>);
}

export default Navbar;
