import React, { Component } from 'react'

import HeaderOne from "../../components/headers/HeaderOne"
import SelectTourneyandPlayer from "./PageComponents/SelectTourneyandPlayer"
import AddClubForm from "./PageComponents/AddClubForm"
import HeaderTwo from '../../components/headers/HeaderTwo'
import InputTextField from '../../components/forms/inputTextField'
import MainButton from '../../components/buttons/mainButton'
import SecondaryButton from '../../components/buttons/secondaryButton'

export default class CreateABag extends Component {
    render() {
        return (
            <div className="flex flex-col max-w-sm mx-auto">
                <div>
                    <HeaderOne text="Create New Bag"/>
                    <SelectTourneyandPlayer/>
                    <div className="space-y-3">
                        <AddClubForm/>
                        <InputTextField label="Club Brand Name" placeholder="Club Brand Name"/>
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
                    <div className="flex flex-row">
                        <div className="py-10">
                            <MainButton />
                        </div>
                        <div className="py-10">
                            <SecondaryButton></SecondaryButton>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
