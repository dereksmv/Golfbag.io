import React, { Component } from 'react'
import InputTextField from "../../../components/forms/inputTextField"

export default class SelectTourneyandPlayer extends Component {
    render() {
        return (
            <div>
                 <div id="playerInfoField" className="pt-3">
                    <InputTextField
                    name="golfer"
                    label="Choose a golfer"
                    id="golfer"
                    placeholder="Search by name"
                    onChange = {this.props.onChange}
                    />
                </div>
              <ul id={'search-results'}></ul>

                <div className="pt-3">
                    <InputTextField
                    name="tournament"
                    label="Choose a tournament"
                    id="tournament"
                    placeholder="Search by tournament"
                    />
                </div>
            </div>
        )
    }
}
