import React, { Component } from 'react'
import InputTextField from '../../components/forms/inputTextField'
import InputFile from "../../components/forms/inputFile"
import InputTextOption from '../../components/forms/inputTextOption'
import InputNumber from '../../components/forms/inputNumber'
import InputSubmit from '../../components/forms/inputSubmit'
import Axios from "axios"
import axios from 'axios'
import MainButton from '../../components/buttons/mainButton'

export default class CreateAGolfer extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {

        }
    }

        /*event handler for onchange events*/
        handleChange(e) {
            this.setState({
                [e.target.id]: e.target.value
            })
        };

        /*Handles submitting form data*/
        handleSubmit(e) {
            axios.post("/api/golfers/create/new", this.state)
                 .then(res => {
                     alert(res.data.message)
                 })

        }

    render() {
        return (
            <div className="container mx-auto">
                <InputTextField name="player_url" label="Player Profile URL" id="url" placeholder="enter a valid url" onChange={(e) => {this.handleChange(e)}}></InputTextField>
                <InputTextField name="sponsor" label="Player Sponsor" id="sponsor" placeholder="enter the player's sponsor" onChange={(e) => {this.handleChange(e)}}></InputTextField>
                <MainButton onClick={(e) => {this.handleSubmit(e)}}></MainButton>    
            </div>
        )
    }
}
