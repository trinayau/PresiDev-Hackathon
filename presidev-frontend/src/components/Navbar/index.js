import {Link, useNavigate} from 'react-router-dom';
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
const Navbar = () => {
    const currentUser = true;

    const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

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

    return ( <>

  <section id="topbar" class="topbar d-flex align-items-center">
    <div class="container d-flex justify-content-center justify-content-md-between">
      <div class="contact-info d-flex align-items-center">
        <i class="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
        <i class="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
      </div>
      <div class="social-links d-none d-md-flex align-items-center">
        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
     </div>
      </div>
  </section>
  {/* <header id="header" class="header d-flex align-items-center">

<div class="container-fluid container-xl d-flex align-items-center justify-content-between">
  <Link to="/" class="logo d-flex align-items-center">
    <h1>Presidium<span>Platform</span></h1>
  </Link>
  <nav id="navbar" class="navbar">
    <ul>
      <li><a href="#hero">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#team">Team</a></li>
      <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
        <ul>
          <li><a href="#">Drop Down 1</a></li>
          <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="#">Deep Drop Down 1</a></li>
              <li><a href="#">Deep Drop Down 2</a></li>
              <li><a href="#">Deep Drop Down 3</a></li>
              <li><a href="#">Deep Drop Down 4</a></li>
              <li><a href="#">Deep Drop Down 5</a></li>
            </ul>
          </li>
          <li><a href="#">Drop Down 2</a></li>
          <li><a href="#">Drop Down 3</a></li>
          <li><a href="#">Drop Down 4</a></li>
        </ul>
      </li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
  <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

</div>
</header> */}
<header>
<AppBar position="static" style={{background:'#008374', boxShadow:'none', padding: 0, maxWidth: '100% !important'}} >
      <Container maxWidth="false">
        <Toolbar disableGutters sx={{ justifyContent: "space-between", padding: 0}}>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => handleLink('/')}
            sx={{
              display: { xs: 'none', md: 'flex', lg: 'flex', xl: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'start' },
              fontFamily: 'Montserrat',
              fontWeight:600,
              color: '#fff',
              fontSize:'30px',
              textDecoration: 'none',
              padding: '32px 0',
              width: '100%',
              letterSpacing:'0.8px',
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
              <MenuIcon sx={{color: 'rgba(255,255,255, 0.6)'}}/>
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
              
               <MenuItem key={'Products'} 
              onClick={() => handleLink('/products')}
               >
                  <Typography textAlign="center">Study Rooms</Typography>
                </MenuItem>
                <MenuItem key={'Suppliers'} 
              onClick={() => handleLink('/suppliers')}
              
               >
                  <Typography textAlign="center">Suppliers</Typography>
                </MenuItem>
                <MenuItem key={'Restaurants'} 
               onClick={() => handleLink('/restaurants')}
             
               >
                  <Typography textAlign="center">Restaurants</Typography>
                </MenuItem>
                <MenuItem key={'contact'} 
               onClick={() => handleLink('/contact')}
              
               >
                  <Typography textAlign="center">Contact</Typography>
                </MenuItem>
        
            </Menu>
          </Box>
         
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => handleLink('/')}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none', flexDirection: 'row', alignItems: 'start', justifyContent: 'start'},
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

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', lg: 'flex', xl: 'flex', flexDirection: "row",    justifyContent: "end" } }}>
           
            <Button
                key={'account'}
                onClick={() => handleLink('/account')}
                sx={{ my: 2, color: 'rgba(255, 255, 255, 0.6);', display: 'block', "&:hover": {
                  color: 'rgba(255, 255, 255, 0.6)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease-in'}}}
              >
                Home
              </Button>
        
              <Button
                key={'contact'}
                onClick={() => handleLink('/account')}
                sx={{ my: 2, color: 'rgba(255, 255, 255, 0.6);', display: 'block', "&:hover": {
                  color: '#52796f',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease-in'}}}
              >
                About
              </Button>
              <Button
                key={'contact'}
                onClick={() => handleLink('/account')}
                sx={{ my: 2, color: 'rgba(255, 255, 255, 0.6);', display: 'block', "&:hover": {
                  color: '#52796f',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease-in'}}}
              >
                Contact
              </Button>
              
            {currentUser ? (
            
              <Button
                key={'logout'}
                // onClick={() => logoutuser()}
                sx={{ my: 2, color: 'rgba(255, 255, 255, 0.6);', display: 'block', "&:hover": {
                  color: '#07060A',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease-in'}}}
              >
                Logout
              </Button>
            ) : (
              <Button
                key={'register'}
                onClick={() => handleLink('/signup')}
                sx={{ my: 2, color: '#EA526F', display: 'block', "&:hover": {
                  color: '#07060A',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease-in'}}}
              >
                Register
              </Button>
            )}

             
            
          </Box>
          
{/* End mobile */}

          {currentUser && <Box sx={{ flexGrow: 0}}>
            <Tooltip title="Open settings">
            
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={currentUser && currentUser.displayName} src="/static/images/avatar/2.jpg" sx={{backgroundColor:'#00796b'}}/>
              </IconButton>
            
            </Tooltip>
            <Menu
              sx={{ mt: '45px'}}
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
                <MenuItem key='logout' onClick={() => { handleCloseUserMenu() }} >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              
              
            </Menu>
          </Box>}
        </Toolbar>
      </Container>
    </AppBar>
    </header>



    </> );
}
 
export default Navbar;
