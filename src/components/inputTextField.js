import React from 'react';

class InputTextField extends React.Component {
    render() {
        return(
            <div>
              
                <label 
                    for="text-field-name" 
                    class="flex text-sm mx-2 font-semibold text-gray-700">
                    Text Field Name
                </label>
                <input 
                    type="text" 
                    name="text-field-name" 
                    id="text-field-name" 
                    placeholder="Placeholder text" 
                    class="w-56 border rounded-md shadow-sm py-2 px-3 text-gray-700" />
              
            </div>

        )
    }
}

export default InputTextField;