import React from 'react';

class InputTextField extends React.Component {
    render() {
        return(
            <div>
                <label 
                    htmlFor={this.props.name} 
                    class="flex text-sm mx-2 w-full font-semibold text-gray-700">
                    {this.props.label}
                </label>
                <input 
                    type="text" 
                    name={this.props.name}
                    id={this.props.id}
                    placeholder={this.props.placeholder} 
                    class="w-full py-2 px-3 text-gray-700 rounded-md" />
              
            </div>

        )
    }
}

export default InputTextField;