import React from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import {Image} from "@material-ui/icons";
import styled from "styled-components";

const GolferCard = (props) => {
  const {firstName, lastName,  image, sponser, rank} = props;
  const StyledCardMedia = styled(CardMedia)`
    height: 100px;
  `;
  const StyledImage = styled.img`
    height: 80px;
    grid-column: 1/2;
    grid-row: 1/4;
    margin-right: 8px;
  `;
  const StyledCard = styled(Card)`
    border-radius: 16px; 
    box-shadow: 0 10px 0px 0px #00E55C;
  `;
  const StyledCardContent = styled(CardContent)`
    display:grid;
    grid-template-columns: 108px auto auto;
    grid-template-rows: 22px 38px 20px
  `;
  const StyledFirstName = styled(Typography)`
    grid-row: 1/2;
    grid-column: 2/4;
    letter-spacing: 0.48px;
    color: #18BF5B;
    text-transform: uppercase;
    font-size: 18px;
    font-family: "Barlow", "Helvetica", "Arial", sans-serif;
  `;
  const StyledLastName = styled(Typography)`
    grid-row: 2/3;
    grid-column: 2/4;
    letter-spacing: 0px;
    color: #585858;
    text-transform: uppercase;
    font-size: 32px;
    font-family: "Barlow Condensed", "Helvetica", "Arial", sans-serif;
  `;
  const StyledSponser = styled(Typography)`
    grid-row: 3/4;
    grid-column: 2/3;
    letter-spacing: 0px;
    color: #585858;
    font-size: 16px;
    font-family: "Barlow", "Helvetica", "Arial", sans-serif;
  `;
  const StyledRank = styled(Typography)`
    grid-row: 3/4;
    grid-column: 3/4;
    letter-spacing: 0px;
    color: #585858;
    font-size: 16px;
    font-family: "Barlow", "Helvetica", "Arial", sans-serif;
  `;
  return (
  <StyledCard variant="outlined">
    <StyledCardContent>
      <StyledImage src={"https://www.placehold.it/100x100"} />
      <StyledFirstName color="textSecondary" gutterBottom>
        {firstName}
      </StyledFirstName>
      <StyledLastName variant="h5" component="h2">
        {lastName}
      </StyledLastName>
      <StyledSponser color="textSecondary">
        {sponser}
      </StyledSponser>
      <StyledRank variant="body2" component="p">
        Rank: {rank}
      </StyledRank>
    </StyledCardContent>
  </StyledCard>
  )
}; export default GolferCard;