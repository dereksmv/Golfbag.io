import React, { Component } from 'react'

import HeaderOne from "../../components/headers/HeaderOne"
import SelectTourneyandPlayer from "./PageComponents/SelectTourneyandPlayer"
import AddClubForm from "./PageComponents/AddClubForm"

export default class CreateABag extends Component {
    render() {
        return (
            <div className="container px-4">
                <div >
                    <HeaderOne text="Create New Bag"/>
                    <SelectTourneyandPlayer/>
                    <AddClubForm/>
                </div>
               

                
            </div>
        )
    }
}
