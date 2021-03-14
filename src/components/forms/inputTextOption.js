import React from 'react';


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
        

        return(
            <div>
              
                <label 
                    htmlFor={this.props.name}
                    className="flex text-sm mx-2 font-semibold text-gray-700">
                    {this.props.label}
                </label>
                <select 
                    id={this.props.id}
                    name={this.props.name}
                    onChange={this.props.onChange}
                    onBlur={this.props.onBlur}
                    defaultValue={'default'}
                    className={"w-full form-select h-full pl-2 pr-7 border rounded-md shadow-sm py-2 px-3 text-gray-700"}>
                        <option disabled value={'default'}>{this.props.defaultText}</option>
                </select>
            </div>

        )
    }
}

export default InputTextOption;