import React from "react";
import {AppBar, Button, Toolbar, Typography} from "@material-ui/core";
import HeaderLogo from "../icons/HeaderLogo";

const Header = () => {
  return (
    <AppBar position="static" color={'transparent'}>
      <Toolbar>
        <HeaderLogo />
      </Toolbar>
    </AppBar>
  );
}; export default Header;