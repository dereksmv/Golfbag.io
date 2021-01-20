
import React, { Component } from 'react'
import InputTextOption from "../forms/inputTextOption"
import ButtonWhiteBackground from "../buttons/ButtonWhiteBackground"

export default class FilteredView extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        console.log("FilteredView Component Updated")
        console.log(this.props.tourOptions)
    }


    componentDidUpdate() {

    }

    shouldComponentUpdate(nextProps) {
        if (this.props !== nextProps) {
            console.log("component should update")
            return true
        } else {
            return false
        }
    }


  /*  shouldComponentUpdate(prevProps) {
        if (prevProps.sponsorOptions === this.props.sponsorOptions) {
            return false
        } else {
            return true
        }
    }
    */

    render() {
        return (
            <div>
                
                <nav className="bg-green-500">
                    <div className="container mx-auto space-x-4">
                        <div className="inline-block space-x-4">
                            <h4 className="inline-block">Tour: </h4><div className="inline-block"><InputTextOption 
                            options={this.props.tourOptions}
                            defaultText={this.props.tourDefault}
                            id="tour"
                            onChange={this.props.tourOnChange}
                            /></div>
                        </div>
                        <div className="inline-block space-x-4">
                            <h4 className="inline-block">Sponsor: </h4><div className="inline-block"><InputTextOption
                            options={this.props.sponsorOptions}
                            defaultText={this.props.sponsorDefault}
                            id="sponsorship"
                            onChange={this.props.sponsorOnChange}
                            /></div>
                        </div>
                        <div className="inline-block space-x-4">
                            <h4 className="inline-block">Country: </h4><div className="inline-block"><InputTextOption
                            options={this.props.countriesOptions}
                            defaultText={this.props.countriesDefault}
                            id="country"
                            onChange = {this.props.countryOnChange}
                            /></div>
                        </div>
                        <div className="inline-block space-x-4">
                            <ButtonWhiteBackground
                            buttonText="Search"
                            onClick={this.props.onClick}
                            />
                        </div>
                  
                    </div>
                </nav>
            </div>
        )
    }
}
