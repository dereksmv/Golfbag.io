import React from 'react';
import {BottomNavigation, BottomNavigationAction, Fab} from "@material-ui/core";
import NavGolf from "../icons/NavGolf";
import {AddAlertOutlined, AddOutlined} from "@material-ui/icons";
import styled from 'styled-components';
import NavAccount from "../icons/NavAccount";
import NavTournament from "../icons/NavTournament";
import NavMenu from "../icons/NavMenu";

const MainNav = () => {

  const StyledIconGroup = styled.div`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
  `;

  const StyledBottomNav = styled(BottomNavigation)`
    position: fixed;
    bottom: 0;
    width:100%;
  `;

  const StyledFab = styled(Fab)`
    position: absolute;
    bottom: 30px;
  `;

  return(
    <StyledBottomNav>
        <BottomNavigationAction label={''} icon={<NavAccount />} />
        <BottomNavigationAction label={''} icon={<NavGolf />} />
      <StyledFab color="primary" aria-label="add">
        <AddOutlined />
      </StyledFab>
      <BottomNavigationAction label={''} icon={<NavTournament />} />
      <BottomNavigationAction label={''} icon={<NavMenu />} />
    </StyledBottomNav>
  );
}
export default MainNav;
