import React, { Component } from 'react'

import HeaderOne from "../../components/headers/HeaderOne"
import SelectTourneyandPlayer from "./PageComponents/SelectTourneyandPlayer"
import AddClubForm from "./PageComponents/AddClubForm"
import InputTextField from '../../components/forms/inputTextField'
import MainButton from '../../components/buttons/mainButton'
import SecondaryButton from '../../components/buttons/secondaryButton'
import MainNav from '../../components/navigation/mainNav'

import Axios from "axios"


export default class CreateABag extends Component {
    constructor(props) {
        super(props)
        this.state = {
            manufacturerOptions: ["Select a club"],
            brandOptions: ["Select a club"]
        }
        this.handleOptions = this.handleOptions.bind(this)
        this.handleBrandOptions = this.handleBrandOptions.bind(this)
    }

    handleBrandOptions(e, params) {
        let searchParam = params
        this.setState({
            brand_name: searchParam
        }, function() {Axios.get(`/api/golf_clubs/search/${this.state.club_type}/${searchParam}`)
                .then(res => {
                    let selectField = document.getElementById("brand_name")
                    selectField.innerHTML = '';
                    let manufacturers = [];
                    
                    for (var i = 0; i < res.data.length; i++) {
                        if (res.data.length > 0) {
                        if (res.data[i].brand_name !== searchParam) {
                            manufacturers.push(res.data[i].brand_name)
                            let newOption = document.createElement("option");
                            newOption.id = res.data[i].brand_name;
                            newOption.textContent = res.data[i].brand_name
                            selectField.appendChild(newOption)
                        }                      
                   
                     } }        
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
                    for (var i = 0; i < res.data.length; i++) {
                        if (res.data.length > 0) {
                        if (res.data[i].manufacturer !== searchParam) {
                            let newOption = document.createElement("option");
                            newOption.id = res.data[i].manufacturer;
                            newOption.textContent = res.data[i].manufacturer
                            selectField.appendChild(newOption)
                                    
                        }    
                        if (res.data[0].manufacturer !== undefined) {
                            let initialValue = res.data[0].manufacturer
                            this.handleBrandOptions(e, initialValue)
                         }                  
                        
                     } }
                     
                    
                           
                })   
               
            } 
            
             
        )
        
    }


    render() {
        return (
            <div className="flex flex-col max-w-sm container mx-auto">
                <div>
                    <MainNav />
                    <HeaderOne text="Create New Bag"/>
                    <SelectTourneyandPlayer/>
                    <div className="flex w-1/3 py-3">
                        <InputTextField label="Tournament Year" placeholder="Enter Year"/>
                    </div>
                    <div className="space-y-4">
                        <AddClubForm
                        onChange = {(e) => this.handleOptions(e)}
                        manufacturerOptions={this.state.manufacturerOptions}
                        manufacturerOnChange={(e)=> this.handleBrandOptions(e, e.target.value)}
                        brandOptions={this.state.brandOptions}
                        />
                        
                    </div>
                    <div className="flex flex-row">
                        <div className="py-10">
                            <MainButton />
                        </div>
                        <div className="py-10">
                            <SecondaryButton></SecondaryButton>
                        </div>
                    </div>
                </div>
                {/*Below is spacing for the navbar on mobile*/}
                <div class="h-20" />
            </div>
        )
    }
}
