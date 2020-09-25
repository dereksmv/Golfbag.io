import React from 'react';

class InputTextOption extends React.Component {
    render() {
        return(
            <div>
              
                <label 
                    for="text-field-name" 
                    class="flex text-sm mx-2 font-semibold text-gray-700">
                    Text Option Field Name
                </label>
                <select 
                    id="text-field-name"
                    name="text-field-name"
                    multiple
                    aria-label="Option"
                    class="w-56 form-select h-full pl-2 pr-7 border rounded-md shadow-sm py-2 px-3 text-gray-700">
                    <option>This is an option</option>
                    <option>This is an option</option>
                    <option>This is an option</option>
                </select>
            </div>

        )
    }
}

export default InputTextOption;