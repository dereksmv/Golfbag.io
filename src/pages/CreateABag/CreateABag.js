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
import {Container} from "@material-ui/core";
import styled from "styled-components";

const CreateABag = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [clubName, setClubName] = useState('');
  const [manufacturerOptions, setManufacturerOptions] = useState([]);
  const [brandOptions, setBrandOptions] = useState([]);
  const [clubNameOptions, setClubNameOptions] = useState([]);
  const [length, setLength] = useState('');
  const [shaft, setShaft] = useState('');

  const suggestedSearch = () => {
    //const listContainer = document.getElementById("search-results");
    //listContainer.innerHTML = "";
    console.log(searchResults);
    if (searchResults.length > 0) {
      searchResults.forEach((searchResult, index) => {
        //const listItem = React.createElement('AutocompleteListItem', {name: searchResult});
        //const rend = ReactDOM.render(listItem);
        //listContainer.appendChild(rend);
      });
    }
  }

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
          // Hmm.
          suggestedSearch();
        } else {
          return;
        }
      })
  }

  const handleNameOptions = (e, params) => {
    // let searchParam = params
    // this.setState({
    //     club_name: searchParam
    //   }, function () {
    //     Axios.get(`/api/golf_clubs/search/${this.state.club_type}/${this.state.brand_name}/${searchParam}`)
    //       .then(res => {
    //
    //         this.setState(
    //           res.data[0]
    //         )
    //         let selectField = document.getElementById("club_name")
    //         selectField.innerHTML = '';
    //         let club_names = [];
    //         for (var i = 0; i < res.data.length; i++) {
    //           if (res.data.length > 0) {
    //             if (club_names.includes(res.data[i].brand_name) === false) {
    //               club_names.push(res.data[i].club_name)
    //               let newOption = document.createElement("option");
    //               newOption.id = res.data[i].brand_name;
    //               newOption.textContent = res.data[i].club_name
    //               selectField.appendChild(newOption)
    //             }
    //           }
    //         }
    //       })
    //   }
    // )
  }

  const handleBrandOptions = (e, params) => {
    // let searchParam = params
    // this.setState({
    //     brand_name: searchParam
    //   }, function () {
    //     Axios.get(`/api/golf_clubs/search/${this.state.club_type}/${searchParam}/NULL`)
    //       .then(res => {
    //         let selectField = document.getElementById("brand_name")
    //         selectField.innerHTML = '';
    //         let brand_names = [];
    //
    //         for (var i = 0; i < res.data.length; i++) {
    //           if (res.data.length > 0) {
    //             if (brand_names.includes(res.data[i].brand_name) === false) {
    //               brand_names.push(res.data[i].brand_name)
    //               let newOption = document.createElement("option");
    //               newOption.id = res.data[i].brand_name;
    //               newOption.textContent = res.data[i].brand_name
    //               selectField.appendChild(newOption)
    //             }
    //           }
    //           if (res.data[0].club_name !== undefined) {
    //             let initialValue = res.data[0].brand_name
    //             this.handleNameOptions(e, initialValue)
    //           }
    //
    //         }
    //       })
    //
    //   }
    // )
  }

  const handleOptions = (e) => {
    // let searchParam = e.target.value
    // this.setState({
    //     [e.target.id]: searchParam
    //   }, function () {
    //     Axios.get(`/api/golf_clubs/search/${searchParam}`)
    //       .then(res => {
    //         let selectField = document.getElementById("manufacturer")
    //         selectField.innerHTML = '';
    //         let manufacturers = []
    //         for (var i = 0; i < res.data.length; i++) {
    //           if (res.data.length > 0) {
    //             if (manufacturers.includes(res.data[i].manufacturer) === false) {
    //               if (res.data[i].manufacturer !== searchParam) {
    //                 manufacturers.push(res.data[i].manufacturer)
    //                 let newOption = document.createElement("option");
    //                 newOption.id = res.data[i].manufacturer;
    //                 newOption.textContent = res.data[i].manufacturer
    //                 selectField.appendChild(newOption)
    //               }
    //             }
    //             if (res.data[0].manufacturer !== undefined) {
    //               let initialValue = res.data[0].manufacturer
    //               this.handleBrandOptions(e, initialValue)
    //             }
    //           }
    //         }
    //       })
    //
    //   }
    // )
    return false;
  }

  return (
    <Container>
      <div>
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
        <div className="">
          <InputTextField
            classes={'add-margin-2x'}
            name="tournament"
            label="Tournament"
            id="tournament"
            placeholder="Search by tournament"
          />
        </div>
        <div className="">
          <AddClubForm
            hidden={true}
            onChange={(e) => handleOptions(e)}
            manufacturerOptions={manufacturerOptions}
            manufacturerOnChange={(e) => handleBrandOptions(e, e.target.value)}
            brandOptions={brandOptions}
            clubNameOptions={clubNameOptions}
            length={length}
            shaft={shaft}
          />

        </div>
        <AddClubButtons/>
      </div>
    </Container>
  )
}; export default CreateABag;