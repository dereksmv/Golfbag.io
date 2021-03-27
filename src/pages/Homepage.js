import React, {useEffect, useState} from "react";
import Axios from "axios";
import GolferCard from "../components/cards/GolferCard";
import {Container, Drawer, Grid, Hidden, List, ListItem, ListItemText} from "@material-ui/core";
import styled from "styled-components";
import MainNav from "../components/navigation/mainNav";
import theme from "../theme/theme";

const Homepage = () => {
  const [cardData, setCardData] = useState([]);
  const drawerItems = [
    {
      key: 'tournament',
      value: 'Tournaments'
    },
    {
      key: 'players',
      value: 'Players'
    },
    {
      key: 'sponsors',
      value: 'Sponsors'
    },
    {
      key: 'pga_tour',
      value: 'PGA Tour'
    },
    {
      key: 'lpga_tour',
      value: 'LPGA Tour'
    },
    {
      key: 'korn_ferry_tour',
      value: 'Korn Ferry Tour'
    },
  ];
  // Styles
  const StyledGridItem = styled(Grid)`
   && {
    width: 100%;
    }
  `;
  const StyledDrawer = styled(Drawer)`
    .MuiDrawer-paper {
      top: 78px;
      background-color: ${theme.palette.background.light};
      box-shadow: 0px 0px 16px ${theme.palette.shadow.header};
    }
  `;
  const StyledContainer = styled(Container)`
    margin-top: 16px;
    max-width: 1280px;
    .MuiContainer-root {
      border: 1px solid orange;
    }
  `;
  const StyledWrapper = styled.div`
    margin-top: 16px;
    margin-right: 48px;
    @media only screen and (min-width: ${theme.breakpoints.values.lg}px) {
       margin-left: 170px;
    }
  `;
  useEffect(() => {
    Axios.get(`/api/golfers/all`, {})
      .then(res => {
        if (res.data.length > 0) {
          setCardData(res.data);
        }
      });
  },[]);


  return (
    <StyledWrapper>
      <Hidden mdDown>
        <StyledDrawer
          variant="permanent"
          anchor="left"
        >
          <List>
            {drawerItems.map(item => <ListItem key={item.key}><ListItemText>{item.value}</ListItemText></ListItem>)}
          </List>
        </StyledDrawer>
      </Hidden>
      <Grid container spacing={4}>
        {cardData.map(data => <StyledGridItem item xs={12} md={6} lg={4} xl={3} className={'MuiGrid-grid-xxl-1'}><GolferCard firstName={data.first_name} lastName={data.last_name} image={data.player_image} sponser={data.sponsorship} rank={data.rank} /></StyledGridItem>)};
      </Grid>
      <Hidden mdUp>
      <MainNav />
      </Hidden>
    </StyledWrapper>
  )
}; export default Homepage;