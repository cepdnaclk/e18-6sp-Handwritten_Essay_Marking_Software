import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { Logout, Notifications } from "@mui/icons-material";

const pages = [ "About Us", "Services", "Contact Us", "Help"];
const settings = ["Profile", "Account", "Dashboard"];

const pageToUrlMap = {
  "Services": "/home",
  // "Services": "/services",
  "About Us": "/about",
  "Contact Us": "/contact",
  "Help": "/help",
};

function NavBar( ) {
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  return (
    <AppBar
      sx={{ marginBottom: 2, zIndex: (theme) => theme.zIndex.drawer + 1 }}
      style={{ background: "#EFE7FA" }}
      position='fixed'
      elevation={0}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Link to='/home'>
            <img style={{ maxWidth: 120 }} src={logo} width={50}/>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* {pages.map((page) => (
              <Button 
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
                >
                {page}
              </Button>
            ))} */}
          {Object.entries(pageToUrlMap).map(([buttonText, url]) => (
            <Link key={url} to={url}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {buttonText}
              </Button>
            </Link>
          ))}  
          </Box>
          <Box sx={{ flexGrow: 0.3 }}>
            <Link to='/notifications'>
              <Notifications fontSize="large"  />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0.3 }}>
            <Link to='/'>
              <Logout 
              onClick= {() => {
                localStorage.removeItem("user");
              }}
              fontSize="large"  />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign='center'>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
