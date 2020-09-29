import React, { Component } from 'react'
import HeaderTwo from "../../../components/headers/HeaderTwo"
import InputTextOptions from "../../../components/forms/inputTextOption"
import InputTextField from "../../../components/forms/inputTextField"

export default class AddClubForm extends Component {
    render() {
        let clubs = ["Select a club", "Driver", "3-Wood", "2 Iron", "3 Iron", "4 Iron", "5 Iron", "6 Iron", "7 Iron", "8 Iron", "9 Iron", "Wedge", "Putter"]
        return (
            <div>
                <HeaderTwo text="Add club to bag"/>
                <InputTextOptions
                name="club-form"
                label="Select a club"
                id="club_type"
                options = {clubs}
                onChange={this.props.onChange}
                />
                <InputTextOptions
                name="manufacturer"
                label="Find club manufacturer"
                id="manufacturer"
                options = {this.props.manufacturerOptions}
                onChange = {this.props.manufacturerOnChange}
                />
                <InputTextOptions 
                name="brand_name"
                label="Club brand name"
                id="brand_name"
                options= {this.props.brandOptions}
                onChange = {this.props.brandOnChange}
                />
                        <InputTextField label="Club Name" placeholder="Club Name"/>
                        <div className="flex flex-row">
                            <div className="flex w-1/2 pr-2">
                                <InputTextField label="Lie Angle" placeholder="Lie Angle"/>
                            </div>
                            <div className="flex w-1/2 pl-2">
                                <InputTextField label="Loft Angle" placeholder="Loft Angle"/>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex w-1/2 pr-2">
                                <InputTextField label="Length" placeholder="Length"/>
                            </div>
                            <div className="flex w-1/2 pl-2">
                                <InputTextField label="Adjustment" placeholder="Adjustment"/>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex w-1/2 pr-2">
                                <InputTextField label="Offset (Wedge Only)" placeholder="Offset"/>
                            </div>
                            <div className="flex w-1/2 pl-2">
                                <InputTextField label="Grind Type (Wedge Only)" placeholder="Grind Type"/>
                            </div>
                        </div>
                        <InputTextField label="Shaft Brand Name" placeholder="Enter Shaft Brand Name"/>
                        <InputTextField label="Shaft Name" placeholder="Enter Shaft Name"/>
                        <div className="flex flex-row">
                            <div className="flex w-1/2 pr-2">
                                <InputTextField label="Flex" placeholder="Enter Flex"/>
                            </div>
                            <div className="flex w-1/2 pl-2">
                                <InputTextField label="Weight" placeholder="Enter Weight"/>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex w-1/2 pr-2">
                                <InputTextField label="Length" placeholder="Length"/>
                            </div>
                            <div className="flex w-1/2 pl-2">
                                <InputTextField label="Torque" placeholder="Torque"/>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex w-1/2 pr-2">
                                <InputTextField label="Tip" placeholder="Enter Tip"/>
                            </div>
                            <div className="flex w-1/2 pl-2">
                                <InputTextField label="Launch Angle" placeholder="Low/Mid/High"/>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex w-1/2 pr-2">
                                <InputTextField label="Shaft Material" placeholder="Steel or Graphite"/>
                            </div>
                        </div>
                        <InputTextField label="Grip Brand Name" placeholder="Enter Grip Brand Name"/>
                        <InputTextField label="Grip Name" placeholder="Enter Grip Name"/>
                        <div className="flex flex-row">
                            <div className="flex w-1/2 pr-2">
                                <InputTextField label="Grip Diameter" placeholder="Enter Grip Diameter"/>
                            </div>
                            <div className="flex w-1/2 pl-2">
                                <InputTextField label="Wrap Type" placeholder="Enter Wrap Type"/>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex w-1/2 pr-2">
                                <InputTextField label="Core (Putter Only)" placeholder="Putter Core Type"/>
                            </div>
                        </div>
                        <InputTextField label="Ball Brand Name" placeholder="Enter Ball Brand Name"/>
                        <InputTextField label="Ball Name" placeholder="Enter Ball Name"/>
            </div>
        )
    }
}
