import React from "react";
import {Avatar, Grid} from "@material-ui/core";
import styled from "styled-components";

const AutocompleteList = (props) => {
  if (props.results.length === 0) {
    return <ul id={'search-results'}></ul>
  }
  const results = (props.results.length > 5) ? props.results.slice(0,5) : props.results;
  //Styles
  const TourText = styled.p`
  text-transform: uppercase;
  font-size:10px;
  `;
  const StyledListContainer = styled.ul`
  margin-top: 8px;
  `;
  const StyledListItem = styled.li`
  margin-top: 12px`;
  return (
    <StyledListContainer id={'search-results'}>
      {results && results.map(res =>
        <StyledListItem>
          <Grid container wrap={"nowrap"} spacing={1}>
            <Grid item>
            <Avatar alt={`${res.full_name} PGA avatar`} src="https://www.placehold.it/100x100" />
            </Grid>
            <Grid item>
            <p>{res.full_name}</p>
            <TourText>{res.tour} player</TourText>
            </Grid>
          </Grid>
        </StyledListItem>
      )}
    </StyledListContainer>
  );
};
export default AutocompleteList;