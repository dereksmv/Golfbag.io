import React, {useEffect, useState} from "react";
import Axios from "axios";
import GolferCard from "../components/cards/GolferCard";
import {Container, Grid} from "@material-ui/core";
import styled from "styled-components";

const Homepage = () => {
  const [cardData, setCardData] = useState([]);
  const StyledGridItem = styled(Grid)`
    margin-top: 26px;
    width: 100%;  
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
    <Grid container>
      {cardData.map(data => <StyledGridItem item><GolferCard firstName={data.first_name} lastName={data.last_name} image={data.player_image} sponser={data.sponsorship} rank={data.rank} /></StyledGridItem>)};
    </Grid>
  )
}; export default Homepage;