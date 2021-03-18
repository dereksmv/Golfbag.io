import React, {Component, useState} from 'react'
import ReactDOM from 'react-dom'
import HeaderOne from "../../components/headers/HeaderOne"
import SelectTourneyandPlayer from "./PageComponents/SelectTourneyandPlayer"
import AddClubForm from "./PageComponents/AddClubForm"
import InputTextField from '../../components/forms/inputTextField'
import AddClubButtons from "./PageComponents/AddClubButtons"

import Axios from "axios"
import AutocompleteListItem from "../../components/autocomplete/AutocompleteListItem";
import AutocompleteList from "../../components/autocomplete/AutocompleteList";
import {Button, Container, Dialog, Grid, Modal} from "@material-ui/core";
import styled from "styled-components";
import MainButton from "../../components/buttons/mainButton";
import SecondaryButton from "../../components/buttons/secondaryButton";

const CreateABag = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [clubName, setClubName] = useState('');
  const [manufacturerOptions, setManufacturerOptions] = useState([]);
  const [brandOptions, setBrandOptions] = useState([]);
  const [clubNameOptions, setClubNameOptions] = useState([]);
  const [length, setLength] = useState('');
  const [shaft, setShaft] = useState('');
  const [addClubModelOpen, setAddClubMmodelOpen] = useState(false);
  const [clubs, setClubs] = useState([]);

  const textSearch = (e) => {
    setSearchResults([]);
     console.log('textSearch', e.target.value);
    //const listContainer = document.getElementById("search-results");
    //listContainer.innerHTML = "";
    Axios.get(`/api/golfers/all`, {
    //Axios.get(`/api/golfers/find?searchParams=${e.target.value}`, {
      // params: {
      //   searchParams: e.target.value
      // }
    })
      .then(res => {
        if (res.data.length > 0) {
          setSearchResults(res.data);
        } else {
          return;
        }
      })
  }


  const handleClubModelOpen = () => {
    setAddClubMmodelOpen(true);
  }

  const handleClubModelClose = () => {
    setAddClubMmodelOpen(false);
  }

  const handleSave = () => {
    let existingClubs = clubs;
    existingClubs.push({
      clubName
    });
    setClubs(existingClubs);
    setAddClubMmodelOpen(false);
  }

  const handleClubChange = (e) => {
    console.log(e.target);
    setClubName(e.target.value);
  }

  const addClubForm = (
    <Container>
    <AddClubForm
      hidden={true}
      manufacturerOptions={manufacturerOptions}
      brandOptions={brandOptions}
      clubNameOptions={clubNameOptions}
      length={length}
      clubOnChange = {(e) => handleClubChange(e)}
      shaft={shaft}
    />
    </Container>
  );

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <HeaderOne text="Create New Bag"/>
        <InputTextField
          classes={'add-margin-2x'}
          name="golfer"
          label="Golfer"
          id="golfer"
          placeholder="Search by name"
          onChange = {(e) => textSearch(e)}
        />
        <AutocompleteList results={searchResults} />
          <InputTextField
            classes={'add-margin-2x'}
            name="tournament"
            label="Tournament"
            id="tournament"
            placeholder="Search by tournament"
          />
        </Grid>
        {clubs && clubs.map(club => <p>{club.clubName}</p>)}
        <Button onClick={() => handleClubModelOpen()}>Add club</Button>
        <Dialog
          open={addClubModelOpen}
          close={handleClubModelClose}
        >
          {addClubForm}
          <Button onClick={(e) => handleSave(e)}>Save</Button>
        </Dialog>
        {/*<Modal*/}
        {/*  open={addClubModelOpen}*/}
        {/*  close={handleClubModelClose}*/}
        {/*  BackdropProps={{ style: { backgroundColor: "#edf2f7", overflow: "auto" } }}*/}
        {/*>*/}
        {/*  {addClubForm}*/}
        {/*</Modal>*/}
      </Grid>
    </Container>
  )
}; export default CreateABag;