import React, {Component, useState} from 'react'

import HeaderOne from "../../components/headers/HeaderOne"
import SelectTourneyandPlayer from "./PageComponents/SelectTourneyandPlayer"
import AddClubForm from "./PageComponents/AddClubForm"
import InputTextField from '../../components/forms/inputTextField'
import AddClubButtons from "./PageComponents/AddClubButtons"

import Axios from "axios"

const CreateABag = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [clubName, setClubName] = useState('');
  const [manufacturerOptions, setManufacturerOptions] = useState([]);
  const [brandOptions, setBrandOptions] = useState([]);
  const [clubNameOptions, setClubNameOptions] = useState([]);
  const [length, setLength] = useState('');
  const [shaft, setShaft] = useState('');

  const suggestedSearch = () => {
    let listContainer = document.getElementById("search-results");
    listContainer.innerHTML = "";
    if (searchResults.length > 0) {
      for (const i = 0; i < searchResults.length; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = searchResults[i].first_name + " " + searchResults[i].last_name;
        listContainer.appendChild(listItem);
      }
    }
  }

  const textSearch = (e) => {
    // const listContainer = document.getElementById("search-results");
    // listContainer.innerHTML = "";
    // Axios.get("/api/golfers/find", {
    //   params: {
    //     searchParams: e.target.value
    //   }
    // })
    //   .then(res => {
    //     if (res.data.length > 0) {
    //       setSearchResults(res.data);
    //       // Hmm.
    //       suggestedSearch();
    //     } else {
    //       return;
    //     }
    //   })
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
  }

  return (
    <div className="flex flex-col max-w-sm container mx-auto">
      <div>
        <HeaderOne text="Create New Bag"/>
        <SelectTourneyandPlayer
          golferOnChange={(e) => {
            textSearch(e)
          }}
        />
        <div className="flex w-1/3 py-3">
          <InputTextField label="Tournament Year" placeholder="Enter Year"/>
        </div>
        <div className="space-y-4">
          <AddClubForm
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
      {/*Below is spacing for the navbar on mobile*/}
      <div class="h-20"/>
    </div>
  )
}; export default CreateABag;