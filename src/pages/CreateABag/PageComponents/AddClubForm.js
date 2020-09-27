import React, { Component } from 'react'
import HeaderTwo from "../../../components/headers/HeaderTwo"
import InputTextOptions from "../../../components/forms/inputTextOption"

export default class AddClubForm extends Component {
    render() {
        let clubs = ["Driver", "3-Wood", "2 Iron", "3 Iron", "4 Iron", "5 Iron", "6 Iron", "7 Iron", "8 Iron", "9 Iron", "Wedge", "Putter"]
        return (
            <div>
                <HeaderTwo text="Add club to bag"/>
                <InputTextOptions
                name="club-form"
                label="Select a club"
                id="add-club"
                options = {clubs}
                />
            </div>
        )
    }
}
