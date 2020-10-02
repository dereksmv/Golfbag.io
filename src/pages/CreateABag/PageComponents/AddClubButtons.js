import React, { Component } from 'react'
import MainButton from "../../../components/buttons/mainButton"
import SecondaryButton from "../../../components/buttons/secondaryButton"

export default class AddClubButtons extends Component {
    render() {
        return (
            <div>
                <div className="flex flex-row">
                        <div className="py-10">
                            <MainButton />
                        </div>
                        <div className="py-10">
                            <SecondaryButton></SecondaryButton>
                        </div>
                    </div>
            </div>
        )
    }
}
