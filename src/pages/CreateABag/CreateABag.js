import React, { Component } from 'react'

import HeaderOne from "../../components/headers/HeaderOne"
import SelectTourneyandPlayer from "./PageComponents/SelectTourneyandPlayer"
import AddClubForm from "./PageComponents/AddClubForm"
import InputTextField from '../../components/forms/inputTextField'
import AddClubButtons from "./PageComponents/AddClubButtons"

import Axios from "axios"


export default class CreateABag extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchResults: []
        };

        this.suggestedSearch = this.suggestedSearch.bind(this);
        this.textSearch = this.textSearch.bind(this);
        this.handleOptions = this.handleOptions.bind(this)
        this.handleBrandOptions = this.handleBrandOptions.bind(this)
        this.handleNameOptions = this.handleNameOptions.bind(this)
    }

    suggestedSearch() {
        var arr = this.state.searchResults;
        console.log(arr);
        let listContainer = document.getElementById("search-results");
        listContainer.innerHTML = "";
        if (arr.length > 0) {
        for (var i = 0; i < arr.length; i++) {
            let listItem = document.createElement("li");
            listItem.textContent = arr[i].first_name + " " + arr[i].last_name;
            listContainer.appendChild(listItem);
        }
    } else {

    }
    }

    textSearch(e) {
        let listContainer = document.getElementById("search-results");
        listContainer.innerHTML = "";
        Axios.get("/api/golfers/find", {
            params: {
                searchParams: e.target.value
                }
            })
             .then(res => {
                 if (res.data.length > 0) {
                 this.setState({
                     searchResults: res.data
                 }, this.suggestedSearch())
             } else {
                 return;
             }
            })  
                   
    }

    handleNameOptions(e, params) {
        let searchParam = params
        this.setState({
            club_name: searchParam
        }, function() {Axios.get(`/api/golf_clubs/search/${this.state.club_type}/${this.state.brand_name}/${searchParam}`)
                .then(res => {
                    
                    this.setState(
                        res.data[0]
                    )
                    let selectField = document.getElementById("club_name")
                    selectField.innerHTML = '';
                    let club_names = [];      
                    for (var i = 0; i < res.data.length; i++) {
                        if (res.data.length > 0)  {
                            if (club_names.includes(res.data[i].brand_name) === false) {
                            club_names.push(res.data[i].club_name)
                            let newOption = document.createElement("option");
                            newOption.id = res.data[i].brand_name;
                            newOption.textContent = res.data[i].club_name
                            selectField.appendChild(newOption)
                            }
                     } }  
                })
            }     
        )
    }

  

    handleBrandOptions(e, params) {
        let searchParam = params
        this.setState({
            brand_name: searchParam
        }, function() {Axios.get(`/api/golf_clubs/search/${this.state.club_type}/${searchParam}/NULL`)
                .then(res => {
                    let selectField = document.getElementById("brand_name")
                    selectField.innerHTML = '';
                    let brand_names = [];
                    
                    for (var i = 0; i < res.data.length; i++) {
                        if (res.data.length > 0)  {
                            if (brand_names.includes(res.data[i].brand_name) === false) {
                            brand_names.push(res.data[i].brand_name)
                            let newOption = document.createElement("option");
                            newOption.id = res.data[i].brand_name;
                            newOption.textContent = res.data[i].brand_name
                            selectField.appendChild(newOption)
                            }
                     }
                    if (res.data[0].club_name !== undefined) {
                        let initialValue = res.data[0].brand_name
                        this.handleNameOptions(e, initialValue)
                     }   

                    }        
                })   
               
            }     
        )
    }
    
    handleOptions(e) {
        let searchParam = e.target.value
        this.setState({
            [e.target.id]: searchParam
        }, function() {Axios.get(`/api/golf_clubs/search/${searchParam}`)
                .then(res => {
                    let selectField = document.getElementById("manufacturer")
                    selectField.innerHTML = '';
                    let manufacturers = []
                    for (var i = 0; i < res.data.length; i++) {
                        if (res.data.length > 0) {
                        if (manufacturers.includes(res.data[i].manufacturer) === false) {
                        if (res.data[i].manufacturer !== searchParam) {
                            manufacturers.push(res.data[i].manufacturer)
                            let newOption = document.createElement("option");
                            newOption.id = res.data[i].manufacturer;
                            newOption.textContent = res.data[i].manufacturer
                            selectField.appendChild(newOption)                   
                        }
                    }
                        if (res.data[0].manufacturer !== undefined) {
                            let initialValue = res.data[0].manufacturer
                            this.handleBrandOptions(e, initialValue)
                         }    
                     }}     
                })   
               
            } 
            
             
        )
        
    }


    render() {
        return (
            <div className="flex flex-col max-w-sm container mx-auto">
                <div>
                    <HeaderOne text="Create New Bag"/>
                    <SelectTourneyandPlayer
                    golferOnChange = {(e) => {this.textSearch(e)}}
                    />
                    <div className="flex w-1/3 py-3">
                        <InputTextField label="Tournament Year" placeholder="Enter Year"/>
                    </div>
                    <div className="space-y-4">
                        <AddClubForm
                        onChange = {(e) => this.handleOptions(e)}
                        manufacturerOptions={this.state.manufacturerOptions}
                        manufacturerOnChange={(e)=> this.handleBrandOptions(e, e.target.value)}
                        brandOptions={this.state.brandOptions}
                        clubNameOptions={this.state.clubNameOptions}
                        length={this.state.length}
                        shaft={this.state.shaft}
                        />
                        
                    </div>
                    <AddClubButtons/>
                </div>
                {/*Below is spacing for the navbar on mobile*/}
                <div class="h-20" />
            </div>
        )
    }
}
