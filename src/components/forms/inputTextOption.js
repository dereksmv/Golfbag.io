import React from 'react';
import {FormControl, InputLabel, Select} from "@material-ui/core";
import styled from "styled-components";


class InputTextOption extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: []
        }
        this.addOptions = this.addOptions.bind(this)
    }

    addOptions(arr) {
        

        if(arr !== undefined) {
        for (var i = 0; i < arr.length; i++) {
            
            let newOption = document.createElement("option")

            newOption.textContent = arr[i]
            newOption.classList.add("text-gray-700")
            document.getElementById(this.props.id).appendChild(newOption)
        }
    }
    } 

    componentDidUpdate(nextProps) {
        
        this.addOptions(this.props.options)
        
    }

    shouldComponentUpdate(nextProps) {
        for (var i = 0; i < nextProps.options.length; i++) {
            if (this.props.options === undefined) {
                return true
            }
            if (this.props.options[i] !== nextProps.options[i]) {
                return true
            }
         else {
            return false
        }
    }
        return false;
}
 


    componentDidMount() {
        this.addOptions(this.props.options)
    }

    render() {
        const StyledFormControl = styled(FormControl)`
          width:100%;
        `;
        return(
        <StyledFormControl variant="outlined">
            <InputLabel htmlFor={this.props.id}>{this.props.label}</InputLabel>
            <Select
              native
              defaultValue={'default'}
              //onChange={handleChange}
              label={this.props.label}
              inputProps={{
                  name: this.props.label,
                  id: this.props.id,
              }}
            >
                <option aria-label="None" value="" />
                {this.props.options.map(option => <option>{option}</option>)}
            </Select>
        </StyledFormControl>
        )
    }
}

export default InputTextOption;