import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
import { AppBar, Box, Container, Toolbar, Typography, IconButton, Menu, MenuItem, Button } from '@mui/material'
import { Link } from 'react-router-dom';
import  MenuIcon from '@mui/icons-material/Menu';

import useStyles from '../styles';

const pages = [
  { title: 'Home', link: '/' },
  { title: 'About', link: 'about' },
  { title: 'Articles', link: 'articles' },
  { title: 'Projects', link: 'projects' },
  // { title: 'Reading List', link: 'reading' },
  { title: 'Contact', link: 'contact' }
];

export default function Navbar() {

    const classes = useStyles();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

  return (
    <AppBar position="static" style={{background: '#333'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, pr:0 }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar" anchorEl={anchorElNav} keepMounted
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' }, pr: 0 }}
              disableScrollLock={ true }
            >
              {pages.map((page) => (
                <Link key={`${page.link}Mobile`} to={page.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <MenuItem key={`${page.title}Mobilebtn`} onClick={handleCloseNavMenu} className={classes.w100}>
                    {page.title}
                  {/* <Typography align="center">{page.title}</Typography> */}
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-around', alignContent: 'stretch', alignItems: 'stretch'}}>
            {pages.map((page) => (
              <div className={classes.navBtn} key={`${page.link}Desktop`}>
                <Link key={`${page.link}Desktop`} to={page.link} style={{ textDecoration: 'none', color: 'inherit'}}>
                  <Button
                    key={`${page.title}Desktopbtn`}
                    onClick={handleCloseNavMenu}
                    sx={{ color: 'white', display: 'block' , margin: 'auto'}}
                  >
                    {page.title}
                  </Button>
                </Link>
              </div>
            ))}
          </Box>
          {/* Search bar to be implemented */}
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </Search> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));