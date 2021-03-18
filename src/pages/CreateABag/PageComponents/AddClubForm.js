import React, {Component} from 'react'
import HeaderTwo from "../../../components/headers/HeaderTwo"
import InputTextOptions from "../../../components/forms/inputTextOption"
import InputTextField from "../../../components/forms/inputTextField"
import {Box, Container, Grid, StyledComponentProps} from "@material-ui/core";
import styled from "styled-components";
import {StylesProvider} from '@material-ui/core/styles';

const AddClubForm = (props) => {
  const clubs = ["Driver", "3-Wood", "2 Iron", "3 Iron", "4 Iron", "5 Iron", "6 Iron", "7 Iron", "8 Iron", "9 Iron", "Wedge", "Putter"];
  const shaftModelOptions = ['Shaft Option'];
  const manufacturerOptions = ['Manufacturer Option'];
  const modelOptions = ['Model Option'];
  const loftAngleOptions = ['Loft Angle Option'];
  const shaftManufacturerOptions = ['Shaft Manu Option'];
  const StyledInputTextOptions = styled(InputTextOptions)`
    && { 
      margin-top:8px!important;
    } 
  `;
  const Spacer = styled.div`
    margin-top: 12px;
  `;
  return (
    <StylesProvider injectFirst>
      <Container>
        <Grid container spacing={3}>
          <HeaderTwo text="Add club to bag"/>
          <Grid item xs={12}>
            <InputTextOptions
              name="club-form"
              label="Select a club"
              id="club_type"
              defaultText="Driver, 3Wood, Putter etc"
              options={clubs}
              onChange={props.clubOnChange}
            />
          </Grid>
          <Grid item xs={12}>
            <InputTextOptions
              name="manufacturer"
              label="Search manufacturers"
              id="manufacturer"
              options={manufacturerOptions}
              onChange={props.manufacturerOnChange}
              defaultText="Search manufacturers"
            />
          </Grid>
          <Grid item xs={12}>
            <InputTextOptions
              name="model"
              label="Search model"
              id="model_name"
              options={modelOptions}
              onChange={modelOptions}
              defaultText="Search model"
            />
          </Grid>
          <Grid item xs={12}>
            <InputTextOptions
              name="loft-angle"
              label="Select loft angle in degrees"
              id="loft_angle"
              options={loftAngleOptions}
              onChange={props.loftAngleOnChange}
              defaultText="Select loft angle in degrees"
            />
          </Grid>
          <Grid item xs={12}>
            <InputTextOptions
              name="shaft-manufacturer"
              label="Search Shaft manufacturers"
              id="shaft_manufacturer"
              options={shaftManufacturerOptions}
              onChange={props.shaftManufacturerOnChange}
              defaultText="Search Shaft manufacturers"
            />
          </Grid>
          <Grid item xs={12}>
            <InputTextOptions
              name="shaft-model"
              label="Search Shaft model"
              id="shaft_model"
              options={shaftModelOptions}
              onChange={props.shaftModelOnChange}
              defaultText="Search Shaft model"
            />
          </Grid>
          <Grid item xs={12}>
            <InputTextField
              name="club-image"
              label="Enter URL for club image"
              id="club_image"
              onChange={props.clubImageOnChange}
              defaultText="Enter URL for club image"
            />
          </Grid>
        </Grid>
      </Container>
    </StylesProvider>
  )
};
export default AddClubForm;
