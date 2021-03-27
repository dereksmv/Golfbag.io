import React from "react";
import {AppBar, Button, Toolbar, Typography} from "@material-ui/core";
import HeaderLogo from "../icons/HeaderLogo";
import styled from "styled-components";
import theme from "../../theme/theme";

const Header = () => {
  const StyledAppBar = styled(AppBar)`
    && { 
      z-index: ${theme.zIndex.drawer + 1 };
      background-color: ${theme.palette.background.light};
      box-shadow: 0px 0px 16px ${theme.palette.shadow.header};
    }
  `;
  return (
    <StyledAppBar position="static" color={'transparent'}>
      <Toolbar>
        <HeaderLogo />
      </Toolbar>
    </StyledAppBar>
  );
}; export default Header;